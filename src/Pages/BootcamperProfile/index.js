import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/index";
import styles from "./bootcamperprofile.module.css";
import soc from "../../Images/soc.png";

const url = process.env.REACT_APP_BACKEND_URL;

function BootcamperProfile({ state }) {
	const [dbInfo, setDbInfo] = useState({});

	useEffect(() => {
		fetch(`${url}/bootcampers/${state.uid}`)
			.then((response) => response.json())
			.then((data) => setDbInfo({ ...data.result }));
		console.log(dbInfo);
	}, []);

	console.log(state.uid);
	return (
		<div className={styles.bootcamperprofile}>
			<motion.img
				whileHover={{ scale: 1.2, transition: { duration: 1 } }}
				className={styles.socLogo}
				src={soc}
				alt="school of code logo"
			/>
			<h1>Welcome to your profile, {state.displayName}!</h1>

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
					<b>Bio:</b> <br />
					{dbInfo.bio}
				</p>
				<p>
					<b>Interested Industry:</b>
					<br /> {dbInfo.interested_industry}
				</p>
				<p>
					<b>Interests:</b> <br /> {dbInfo.interests}
				</p>
				{/* <p>
          <b>Selected Mentors:</b>{" "}
          {dbInfo.mentors_i_like && dbInfo.mentors_i_like.join(", ")}
        </p> */}
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
			<br />
			<Link to="/BootcampersHome">
				<Button text="Back" />
			</Link>
		</div>
	);
}

export default BootcamperProfile;
