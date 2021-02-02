import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Button/index";
import styles from "./bootcampers.module.css";
import soc from "../../Images/soc.png";

export default function BootcamperHomepage() {
  return (
    <div className={styles.bootcamperhome}>
      <a href="http://www.schoolofcode.co.uk" target="blank">
        <motion.img
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          className={styles.socLogo}
          src={soc}
          alt="school of code logo"
        />
      </a>
      <h2>Bootcampers Homepage</h2>
      <h3>Welcome to the School of Code!</h3>
      <Link to="/bootcamperProfile">
        <Button text={"My Profile"} />
      </Link>
      <Link to="/mentorMatching">
        <Button text={"View Mentors"} />
      </Link>
      <Link to="/Bootcamper">
        <Button text="Back" />
      </Link>
    </div>
  );
}

