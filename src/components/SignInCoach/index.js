//functionality
import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import { useHistory } from "react-router-dom"; */

//components
import Button from "../Button/index";
/* import Coaches from "../../Pages/CoachesMain/index"; */

//css
import styles from "./signInCoach.module.css";

function AskForPassword() {
	const [isTrue, setIsTrue] = useState(false);
	function checkCorrect(event) {
		let value = event.target.value;

		if (value === "yes") {
			console.log("this is the value", value);
			setIsTrue(true);
		}
	}
	console.log(isTrue);
	return (
		<div className={styles.coachPassword}>
			<nav className={styles.coachInput}>
				<input
					className={styles.inputPassword}
					type="password"
					name="password"
					placeholder="Enter password here..."
					onChange={checkCorrect}
				/>

				<Link to={isTrue ? "/coachesTable" : "/error"}>
					<Button text="Submit" />
				</Link>
			</nav>
		</div>
	);
}

export default AskForPassword;
