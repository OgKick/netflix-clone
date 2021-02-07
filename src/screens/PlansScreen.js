import React from 'react'
import Nav from '../Nav'
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import './ProfileScreen.css'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen