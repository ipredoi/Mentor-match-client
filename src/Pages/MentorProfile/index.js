//functionality
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/index";
import styles from "./mentorprofile.module.css";
import soc from "../../Images/soc.png";
import { url } from "../../libs/serverUrl";

function MentorProfile({ state }) {
	const [dbInfo, setDbInfo] = useState({});
	console.log(state.uid);
	useEffect(() => {
		fetch(`${url}/mentors/${state.uid}`)
			.then((response) => response.json())
			//.then((data) => console.log(data))
			.then((data) => setDbInfo({ ...data.result }));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(dbInfo);
	return (
		<div className={styles.mentorprofile}>
			<motion.img
				whileHover={{ scale: 1.2, transition: { duration: 1 } }}
				className={styles.socLogo}
				src={soc}
				alt="school of code logo"
			/>
			<h2>Hi {state.displayName}, welcome to your profile!</h2>
			<p>
				Thanks for filling in the mentor sign up form for this cohort! Please
				view your account details below.
			</p>

			<div className={styles.profileInfo}>
				<p>
					<b>ID:</b>
					{dbInfo.id}
				</p>
				<p>
					<b>Name:</b> <br />
					{dbInfo.name}
				</p>
				<p>
					<b>Coding Languages:</b>
					<br /> {dbInfo.coding_languages}
				</p>
				<p>
					<b>Speciality Language:</b> <br /> {dbInfo.speciality_language}
				</p>
				<p>
					<b>Industry:</b>
					<br />
					{dbInfo.industry}
				</p>
				<p>
					<b>Current Business:</b>
					<br />
					{dbInfo.current_business}
				</p>
				<p>
					<b>Present Role:</b>
					<br />
					{dbInfo.present_role}
				</p>
				<p>
					<b>Role Description:</b>
					<br />
					{dbInfo.role_description}
				</p>
				<p>
					<b>Bio:</b>
					<br />
					{dbInfo.bio}
				</p>

				<p>
					<b>Interests:</b>
					<br />
					{dbInfo.interests}
				</p>
				<p>
					<b>Email Address:</b>
					<br /> {dbInfo.email}
				</p>
			</div>
			<br />
			<br />
			<div className={styles.profileLink}>
				<p>
					If there are any issues with your profile information, please contact
					the School of Code on{" "}
					<a href="mailto: bootcamp@schoolofcode.co.uk">
						bootcamp@schoolofcode.co.uk
					</a>
				</p>
			</div>
		
			<Link to="/Mentor">
				<Button text="Back" />
			</Link>
		</div>
	);
}

export default MentorProfile;
