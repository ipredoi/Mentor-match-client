//functionality
import React, { useState, useEffect } from "react";
import BootcamperMatch from "../../Pages/BootcamperMatch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components

//css
import styles from "./bootcamperForm.module.css";

function BootcamperForm({ state }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIndustry, setInterestedIndustry] = useState("");
  const [interests, setInterests] = useState("");
  const [bio, setBio] = useState("");
  const [dbBootcamperInfo, setDbBootcamperInfo] = useState(false);
  const [formClass, setFormClass] = useState(true);
  function catchName(e) {
    setDisplayName(e.target.value);
  }
  function catchEmail(e) {
    setEmail(e.target.value);
  }
  function catchIndustry(e) {
    setInterestedIndustry(e.target.value);
  }
  function catchInterests(e) {
    setInterests(e.target.value);
  }
  function catchBio(e) {
    setBio(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://internetexpl-backend.herokuapp.com/bootcampers", {
      /* fetch("http://localhost:5000/bootcampers", { */
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
    fetch(`http://localhost:5000/bootcampers/${state.uid}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result !== undefined) {
          if (data.result.google_id === state.uid) {
            setDbBootcamperInfo(true);
            console.log(state.uid);
          }
        }
      });
    console.log(dbBootcamperInfo);
  }, []);

  //console.log(displayName, email, interestedIndustry, interests, bio);}

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
              Interested Industry: <br />
              <input
                type="text"
                name="interestedIndustry"
                onChange={catchIndustry}
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

export default BootcamperForm;
