/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
//functionality
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Button from "../../components/Button/index";
import MentorDisplayCards from "../../components/MentorDisplayCards/index";

//css
import styles from "./match.module.css";

//images
import soc from "../../Images/soc.png";
const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:5000`;
function BootcamperMatch({ state }) {
  const [mentors, setMentors] = useState([]);
  const [chosenArray, setChosenArray] = useState([]);
  const [patchSent, setPatchSent] = useState(false);

  useEffect(() => {
    setMentors([]);
    fetch(`${url}/mentors`)
      .then((response) => response.json())
      .then((data) => setMentors([...mentors, ...data.result]));
  }, []);
  console.log(state.uid);
  function handleSubmit() {
    fetch(`${url}/bootcampers/${state.uid}`, {
      method: "PATCH",
      body: JSON.stringify({ mentors_i_like: chosenArray }),
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setPatchSent(!patchSent);
  }

  return (
    <div className={styles.bootcampermatch}>
      <motion.img
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className={styles.socLogo}
        src={soc}
        alt="school of code logo"
      />
      <div className={styles.instructions}>
        <h1>Mentor Matching!</h1>
        <p>
          Below you will find all mentors for your School of Code cohort. Please
          select a minimum of 5 mentors you would be happy to be paired with.
          Once you have selected your mentors, click submit at the bottom of the
          page.
        </p>
        <p>
          We will try to pair you with your preferred mentor however due to the
          size of the cohort this may not always be possible. Please check for
          updates on mentor pairing prior to the course start date.
        </p>
      </div>

      {!patchSent && (
        <div className={styles.cardArea}>
          {mentors.map((mentor) => {
            return (
              <MentorDisplayCards
                key={mentor.google_id}
                mentor={mentor}
                chosenFn={setChosenArray}
                chosenArray={chosenArray}
              />
            );
          })}
        </div>
      )}
      {!patchSent && <Button text={"Submit"} onClick={handleSubmit} />}

      {patchSent && (
        <div className={styles.successDiv}>
          <p>Thank you! Your preferences have been saved!</p>
          <Link to="/bootcamperProfile">
            <Button text={"View Profile"} onClick={onclick} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default BootcamperMatch;
