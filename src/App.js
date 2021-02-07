import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/profile">
							<ProfileScreen />
						</Route>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;