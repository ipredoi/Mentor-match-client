/* eslint-disable no-unused-vars */
//functionality
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Button from "../../components/Button/index";
//images
import soc from "../../Images/soc.png";

//css
import styles from "./coachTables.module.css";

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:5000`;

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
      <h2 class={styles.welcomeh2}>Welcome, Coach!</h2>
      <p class={styles.pTag}>
        Information for Bootcampers and Mentors are found in the tables below.
      </p>
      <Link to="/">
        <Button text="Back" />
      </Link>
      <h2 class={styles.h2}>Bootcamper Information</h2>
      <table className={styles.BootcamperTable}>
        <thead>
          {/* creates table head  */}
          <tr>
            <th>ID Number </th>
            <th>Name</th>
            <th>Bio</th>
            <th>Interested Industry</th>
            <th>Interests</th>
            <th className={styles.mentorsList}>Selected Mentors</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* Map trough bootcampers array of objects and for each object creates a row in the table */}
        {bootcampersTable.map((bootcamper) => {
          return (
            <tr>
              <td>{bootcamper.id}</td>
              <td>{bootcamper.name}</td>
              <td>{bootcamper.bio}</td>
              <td>{bootcamper.interested_industry}</td>
              <td>{bootcamper.interests}</td>
              <td className={styles.mentorTd}>
                {bootcamper.mentors_i_like &&
                  bootcamper.mentors_i_like.join(", ")}
              </td>
              <td>{bootcamper.email}</td>
            </tr>
          );
        })}
      </table>
      <h2 class={styles.h2}>Mentor Information</h2>
      <table class={styles.mentorsTable}>
        <thead>
          {/* creates table head  */}
          <tr>
            <th>ID Number</th>
            <th>Name</th>
            <th>Bio</th>
            <th>Coding Languages</th>
            <th>Speciality Language</th>
            <th>Industry</th>
            <th>Current Business</th>
            <th>Present Role</th>
            <th>Role Description</th>
            <th>Interests</th>
            <th>Previous Bootcamper</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* Map trough mentors array of objects and for each object creates a row in the table */}
        {mentorsTable.map((mentor) => {
          return (
            <tr>
              <td>{mentor.id}</td>
              <td>{mentor.name}</td>
              <td>{mentor.bio}</td>
              <td>{mentor.coding_languages}</td>
              <td>{mentor.speciality_language}</td>
              <td>{mentor.industry}</td>
              <td>{mentor.current_business}</td>
              <td>{mentor.present_role}</td>
              <td>{mentor.role_description}</td>
              <td>{mentor.interests}</td>
              <td>
                {mentor.previous_bootcamper
                  ? "Is a previous bootcamper"
                  : "Is not a previous bootcamper"}
              </td>
              <td>{mentor.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default CoachDisplayTables;
