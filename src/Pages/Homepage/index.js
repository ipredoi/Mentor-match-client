//functionality
import React from "react";
import {Link } from "react-router-dom";
import { motion } from "framer-motion";
//images
import soc from "../../Images/soc.png";
//components
import Button from "../../components/Button/index";
/* import BootcamperSignIn from "../../components/SignInBootcamper/index";
import MentorSignIn from "../../components/SignInMentor/index";
import CoachSignIn from "../../components/SignInCoach/index";
 */
//pages
/* import MentorMain from "../MentorsMain/index";
import BootcamperMain from "../BootcamperMain/index";
import CoachesMain from "../CoachesMain/index"; */

//css
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <nav className={styles.homePageButtons}>
        <a href="https://www.schoolofcode.co.uk" target="blank">
          <motion.img
            whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            className={styles.socLogo}
            src={soc}
            alt="school of code logo"
          />
        </a>
        <h2>Welcome To School of Code Mentoring</h2>
        <p>Please select your role at School of Code</p>

        <Link to="/Bootcamper">
          <Button text={"Bootcamper"} />
        </Link>

        <Link to="/Mentor">
          <Button text={"Mentor"} />
        </Link>

        <Link to="/Coach">
          <Button text={"Coach"} />
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;
