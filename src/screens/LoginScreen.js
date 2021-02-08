import React, { useEffect, useState } from "react";
import SignupScreen from "./SignupScreen";
import Footer from "../Footer";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            className="nav__logo"
            src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?w=939"
            alt="Netflix Logo"
          />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__button"
          >
            Sign In
          </button>
          <div className="loginScreen__gradient" />
          <div className="loginScreen__body">
            {signIn ? (
              <SignupScreen />
            ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3>
                  Read to watch? Enter you email to create or restart your
                  membership
                </h3>
                <div className="loginScreen__input">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button
                      onClick={() => setSignIn(true)}
                      className="loginScreen__getStarted"
                    >
                      GET STARTED
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginScreen;