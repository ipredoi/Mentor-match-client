//functionality
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//auth
import firebase from "firebase/app";
import { signInWithRedirect } from "../Firebase";
import { logout } from "../Firebase";

//components
import Button from "../../components/Button/index";
import MentorsForm from "../../components/MentorForm/index";
//css
import styles from "./signInMentor.module.css";

//images
import signInGoogle from "../../Images/SignInGoogle.png";
import loadingSpinner from "../../Images/Loading.gif";
//import signOut from "../../Images/SignOut.png";
import errorImage from "../../Images/error.png";
import soc from "../../Images/soc.png";

function MentorSignIn({ setMentorGoogle }) {
	const [user, loading, error] = useAuthState(firebase.apps[0].auth());
	console.log(user);
	setMentorGoogle(user);
	return (
		<div className={styles.signInDiv}>
			<a href="https://www.schoolofcode.co.uk" target="blank">
				<motion.img
					whileHover={{ scale: 1.2, transition: { duration: 1 } }}
					className={styles.socLogo}
					src={soc}
					alt="school of code logo"
				/>
			</a>
			<h2>Hi, welcome to School of Code Mentoring</h2>
			{!user && (
				<img
					className={styles.googleSignIn}
					src={signInGoogle}
					alt="google sign in"
					onClick={signInWithRedirect}
				/>
			)}
			{user && (
				<div>
					<Link to="/MentorProfile">
						<Button text={"Profile"} />
					</Link>
					<Button
						className={styles.signOut}
						onClick={() => {
							logout();
						}}
						text={"Log Out"}
					/>
				</div>
			)}
			{!user && (
				<Link to="/">
					<Button text="Back" />
				</Link>
			)}

			{user && <MentorsForm state={user} />}
			{loading && (
				<img
					className={styles.spinnerGif}
					src={loadingSpinner}
					alt="loading spinner"
				/>
			)}
			{error && <img src={errorImage} alt="error message" />}
			{error && <p>Please try again.</p>}
		</div>
	);
}

export default MentorSignIn;
