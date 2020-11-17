//functionality
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Button from "../../components/Button/index";

//css
import styles from "./bootcampers.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperHomepage() {
  return (
    <div className={styles.bootcamperhome}>
      <a href="http://www.schoolofcode.co.uk" target="blank">
        <motion.img
          whileHover={{ scale: 1.2, transition: { duration: 1 } }}
          className={styles.socLogo}
          src={soc}
          alt="school of code logo"
        />
      </a>{" "}
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

export default BootcamperHomepage;
