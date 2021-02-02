//functionality
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { motion } from "framer-motion";

//css
import styles from "./coaches.module.css";

//Components
import AskForPassword from "../../components/SignInCoach/index";
import Button from "../../components/Button/index";

//images
import soc from "../../Images/soc.png";

export default function CoachSignIn() {
	return (
		<div className={styles.coachSignIn}>
			<nav className={styles.coachInput}>
				<a href="http://www.schoolofcode.co.uk" target="blank">
					<motion.img
						whileHover={{ scale: 1.2, transition: { duration: 1 } }}
						className={styles.socLogo}
						src={soc}
						alt="school of code logo"
					/>
				</a>
				<h2>Welcome, Coach!</h2>
				<p>Please enter the coach password below:</p>
				<AskForPassword />
				<Link to="/">
					<Button text="Back" />
				</Link>
			</nav>
		</div>
	);
}
