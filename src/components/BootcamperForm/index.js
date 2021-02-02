import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./bootcamperForm.module.css";
import { url } from "../../libs/serverUrl";

export default function BootcamperForm({ state }) {
	const [, setDisplayName] = useState("");
	const [, setEmail] = useState("");
	const [interestedIndustry, setInterestedIndustry] = useState("");
	const [interests, setInterests] = useState("");
	const [bio, setBio] = useState("");
	const [dbBootcamperInfo, setDbBootcamperInfo] = useState(false);
	const [formClass, setFormClass] = useState(true);

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`${url}/bootcampers`, {
			method: "POST",
			body: JSON.stringify({
				name: state.displayName,
				bio: bio,
				interested_industry: interestedIndustry,
				interests: interests,
				mentors_I_Like: [``],
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
		setFormClass(!formClass);
	}

	useEffect(() => {
		fetch(`${url}/bootcampers/${state.uid}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.result !== undefined) {
					if (data.result.google_id === state.uid) {
						setDbBootcamperInfo(true);
					}
				}
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.overall}>
			{!dbBootcamperInfo && (
				<div class={formClass ? styles.show : styles.hide}>
					<p className={styles.ptag}>
						Please complete the form below and make sure you submit your
						information! This will take you to the mentor matching page once
						completed.
					</p>
					<form>
						<label>
							Name: <br />
							<input
								type="text"
								name="displayName"
								onChange={(e) => setDisplayName(e.target.value)}
								value={state.displayName}
							></input>
						</label>
						<label>
							Email: <br />
							<input
								type="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								value={state.email}
							></input>
						</label>
						<label>
							Interested Industry: <br />
							<input
								type="text"
								name="interestedIndustry"
								onChange={(e) => setInterestedIndustry(e.target.value)}
							></input>
						</label>
						<label>
							Interests: <br />
							<input
								type="text"
								name="interests"
								onChange={(e) => setInterests(e.target.value)}
							></input>
						</label>
						<label>
							Bio: <br />
							<textarea
								name="bio"
								cols="30"
								rows="10"
								onChange={(e) => setBio(e.target.value)}
							></textarea>
						</label>
						<Link to="/BootcampersHome">
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
