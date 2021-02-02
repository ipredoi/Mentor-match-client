//functionality
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//components

//css
import styles from "./mentorForm.module.css";
import { url } from "../../libs/serverUrl";

function MentorForm({ state }) {
	const [, setDisplayName] = useState("");
	const [, setEmail] = useState("");
	const [industry, setIndustry] = useState("");
	const [interests, setInterests] = useState("");
	const [bio, setBio] = useState("");
	const [currentBusiness, setCurrentBusiness] = useState("");
	const [currentRole, setCurrentRole] = useState("");
	const [roleDescription, setRoleDescription] = useState("");
	const [specialityLanguage, setSpecialityLanguage] = useState("");
	const [previousBootcamper, setPreviousBootcamper] = useState("");
	const [codingLanguages, setCodingLanguages] = useState("");
	const [dbMentorInfo, setDbMentorInfo] = useState(false);
	const [formClass, setFormClass] = useState(true);

	function catchName(e) {
		setDisplayName(e.target.value);
	}
	function catchEmail(e) {
		setEmail(e.target.value);
	}
	function catchIndustry(e) {
		setIndustry(e.target.value);
	}
	function catchInterests(e) {
		setInterests(e.target.value);
	}
	function catchBio(e) {
		setBio(e.target.value);
	}

	function catchCurrentBusiness(e) {
		setCurrentBusiness(e.target.value);
	}

	function catchCurrentRole(e) {
		setCurrentRole(e.target.value);
	}
	function catchRoleDescription(e) {
		setRoleDescription(e.target.value);
	}

	function catchCodingLanguages(e) {
		setCodingLanguages(e.target.value);
	}

	function catchSpecialityLanguage(e) {
		setSpecialityLanguage(e.target.value);
	}
	
	function catchPreviousBootcamper(e) {
		setPreviousBootcamper(e.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`${url}/mentors`, {
			method: "POST",
			body: JSON.stringify({
				name: state.displayName,
				bio: bio,
				coding_languages: codingLanguages,
				speciality_language: specialityLanguage,
				industry: industry,
				current_business: currentBusiness,
				present_role: currentRole,
				role_description: roleDescription,
				interests: interests,
				previous_bootcamper: previousBootcamper,
				email: state.email,
				google_id: state.uid,
			}),
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			mode: "cors",
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
		console.log("handlesubmit working");
		setFormClass(!formClass);
	}

	useEffect(() => {
		fetch(`${url}/mentors/${state.uid}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.result !== undefined) {
					if (data.result.google_id === state.uid) {
						setDbMentorInfo(true);
						console.log(state.uid);
					}
				}
			});
		console.log(dbMentorInfo);
	}, [dbMentorInfo, state.uid]);

	//console.log(displayName, email, interestedIndustry, interests, bio);

	return (
		<div className={styles.overall}>
			{!dbMentorInfo && (
				<div className={formClass ? styles.show : styles.hide}>
					<p className={styles.ptag}>
						Please complete the form below and make sure you submit your
						information! This will put you in the pool of mentors for the
						current cohort. Thank you for your submission!
					</p>

					<form>
						<label>
							Name: <br />
							<input
								type="text"
								name="displayName"
								onChange={catchName}
								value={state.displayName}
							></input>
						</label>
						<label>
							Email: <br />
							<input
								type="email"
								name="email"
								onChange={catchEmail}
								value={state.email}
							></input>
						</label>
						<label>
							Industry: <br />
							<input
								type="text"
								name="interestedIndustry"
								onChange={catchIndustry}
							></input>
						</label>
						<label>
							Current Business: <br />
							<input
								type="text"
								name="currentBusiness"
								onChange={catchCurrentBusiness}
							></input>
						</label>
						<label>
							Current Role: <br />
							<input
								type="text"
								name="currentRole"
								onChange={catchCurrentRole}
							></input>
						</label>
						<label>
							Role Description: <br />
							<input
								type="text"
								name="roleDescription"
								onChange={catchRoleDescription}
							></input>
						</label>
						<label>
							Coding Languages: <br />
							<input
								type="text"
								name="codingLanguages"
								onChange={catchCodingLanguages}
							></input>
						</label>
						<label>
							Speciality Language:
							<br />
							<input
								type="text"
								name="specialityLanguage"
								onChange={catchSpecialityLanguage}
							></input>
						</label>
						<label>
							Interests: <br />
							<input
								type="text"
								name="interests"
								onChange={catchInterests}
							></input>
						</label>
						<label>
							Bio: <br />
							<textarea
								name="bio"
								cols="30"
								rows="10"
								onChange={catchBio}
							></textarea>
						</label>
						<label>
							Are You A Previous Bootcamper? (true/false) <br />
							<input
								type="text"
								name="previousBootcamper"
								onChange={catchPreviousBootcamper}
							></input>
						</label>

						<Link to="/MyProfile">
							<button onClick={handleSubmit} type="submit">
								Submit Form
							</button>
						</Link>
					</form>
				</div>
			)}
		</div>
	);
}

export default MentorForm;
