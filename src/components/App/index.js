import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../../Pages/Homepage";
// Mentor Pages
import MentorSignIn from "../SignInMentor/index";
import MentorMain from "../../Pages/MentorsMain/index";
import MentorProfile from "../../Pages/MentorProfile/index";
// Bootcamper Pages
import BootcamperSignIn from "../SignInBootcamper/index";
import BootcamperMain from "../../Pages/BootcamperMain/index";
import BootcamperMatch from "../../Pages/BootcamperMatch/index";
import BootcampersProfile from "../../Pages/BootcamperProfile/index";
//Coach Pages
import CoachesMain from "../../Pages/CoachesMain";
import CoachDisplayTables from "../../Pages/CoachDisplayTables";

export default function App() {
	const [userGoogle, setUserGoogle] = useState("");
	const [mentorGoogle, setMentorGoogle] = useState("");

	console.log(mentorGoogle);

	return (
		<Router>
			<div className="App">
				<nav className="navButtons"></nav>

				<Switch>
					<Route path="/CoachesTable">
						<CoachDisplayTables />
					</Route>
					<Route path="/Bootcamper">
						<BootcamperSignIn setUserGoogle={setUserGoogle} />
					</Route>
					<Route path="/Mentor">
						<MentorSignIn setMentorGoogle={setMentorGoogle} />
					</Route>
					<Route path="/Coach">
						<CoachesMain />
					</Route>
					<Route path="/BootcampersHome">
						<BootcamperMain />
					</Route>
					<Route path="/MentorsHome">
						<MentorMain state={mentorGoogle} />
					</Route>
					<Route path="/mentorProfile">
						<MentorProfile state={mentorGoogle} />
					</Route>
					<Route path="/bootcamperProfile">
						<BootcampersProfile state={userGoogle} />
					</Route>
					<Route path="/mentorMatching">
						<BootcamperMatch state={userGoogle} />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
