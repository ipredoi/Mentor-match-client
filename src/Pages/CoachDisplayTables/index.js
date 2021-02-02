import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/index";
import soc from "../../Images/soc.png";
import styles from "./coachTables.module.css";
import { url } from "../../libs/serverUrl";

function CoachDisplayTables() {
	//bootcampers table
	const [bootcampersTable, setBootcampersTable] = useState([]);

	// mentors table
	const [mentorsTable, setMentorsTable] = useState([]);

	//get request for bootcampers data
	useEffect(() => {
		async function getBootcamper() {
			const response = await fetch(`${url}/bootcampers`, {
				headers: { "Contetn-Type": "application/json" },
			});
			const data = await response.json();
			// result - an array of objects
			setBootcampersTable(data.result);
		}
		getBootcamper();
	}, []);
	/*   console.log(bootcampersTable); */

	//Get request for mentors data
	useEffect(() => {
		async function getMentor() {
			const response = await fetch(`${url}/mentors`, {
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			//result - an array of objects
			setMentorsTable(data.result);
		}
		getMentor();
	}, []);
	/* console.log(mentorsTable); */

	return (
		<div className={styles.tables}>
			<motion.img
				whileHover={{ scale: 1.2, transition: { duration: 1 } }}
				className={styles.socLogo}
				src={soc}
				alt="school of code logo"
			/>{" "}
			<h2 className={styles.welcomeh2}>Welcome, Coach!</h2>
			<p className={styles.pTag}>
				Information for Bootcampers and Mentors are found in the tables below.
			</p>
			<Link to="/">
				<Button text="Back" />
			</Link>
			<h2 className={styles.h2}>Bootcamper Information</h2>
			<div>
				<table className={styles.BootcamperTable}>
					<thead>
						{/* creates table head  */}
						<tr>
							<th scope="col">ID Number </th>
							<th scope="col">Name</th>
							<th scope="col">Bio</th>
							<th scope="col">Interested Industry</th>
							<th scope="col">Interests</th>
							<th scope="col" className={styles.mentorsList}>
								Selected Mentors
							</th>
							<th>Email</th>
						</tr>
					</thead>
					{/* Map trough bootcampers array of objects and for each object creates a row in the table */}
					{bootcampersTable.map((bootcamper) => {
						return (
							<tr>
								<td data-label="ID Number">{bootcamper.id}</td>
								<td data-label="Name">{bootcamper.name}</td>
								<td data-label="Bio">{bootcamper.bio}</td>
								<td data-label="Interested Industry">
									{bootcamper.interested_industry}
								</td>
								<td data-label="Interests">{bootcamper.interests}</td>
								<td data-label="Selected Mentors" className={styles.mentorTd}>
									{bootcamper.mentors_i_like &&
										bootcamper.mentors_i_like.join(", ")}
								</td>
								<td data-label="Email">{bootcamper.email}</td>
							</tr>
						);
					})}
				</table>
			</div>
			<h2 className={styles.h2}>Mentor Information</h2>
			<div className={styles.mentorsTableContainer}>
				<table className={styles.mentorsTable}>
					<thead>
						{/* creates table head  */}
						<tr>
							<th scope="col">ID Number</th>
							<th scope="col">Name</th>
							<th scope="col">Bio</th>
							<th scope="col">Coding Languages</th>
							<th scope="col">Speciality Language</th>
							<th scope="col">Industry</th>
							<th scope="col">Current Business</th>
							<th scope="col">Present Role</th>
							<th scope="col">Role Description</th>
							<th scope="col">Interests</th>
							<th scope="col">Previous Bootcamper</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					{/* Map trough mentors array of objects and for each object creates a row in the table */}
					{mentorsTable.map((mentor) => {
						return (
							<tr>
								<td data-label="ID Number">{mentor.id}</td>
								<td data-label="Name">{mentor.name}</td>
								<td data-label="Bio">{mentor.bio}</td>
								<td data-label="Coding Languages">{mentor.coding_languages}</td>
								<td data-label="Speciality Language">
									{mentor.speciality_language}
								</td>
								<td data-label="Industry">{mentor.industry}</td>
								<td data-label="Current Business">{mentor.current_business}</td>
								<td data-label="Present Role">{mentor.present_role}</td>
								<td data-label="Role Description">{mentor.role_description}</td>
								<td data-label="Interests">{mentor.interests}</td>
								<td data-label="Previous Bootcamper">
									{mentor.previous_bootcamper
										? "Is a previous bootcamper"
										: "Is not a previous bootcamper"}
								</td>
								<td data-label="Email">{mentor.email}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
}

export default CoachDisplayTables;
