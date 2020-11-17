//functionality
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Button from "../../components/Button/index";

//css
import styles from "./mentorprofile.module.css";

//images
import soc from "../../Images/soc.png";

function MentorProfile() {
  return (
    <div className={styles.mentorprofile}>
      <motion.img
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className={styles.socLogo}
        src={soc}
        alt="school of code logo"
      />{" "}
      <h2>Welcome to your profile!</h2>
      <p>
        Thanks for filling in the mentor sign up form for this cohort! Please
        view your account details below.
      </p>
      <p>
        If there are any issues with your profile information, please contact
        the School of Code on bootcamp@schoolofcode.co.uk
      </p>
      <Link to="/Mentor">
        <Button text="Back" />
      </Link>
    </div>
  );
}

export default MentorProfile;
