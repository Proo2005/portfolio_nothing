import React from "react";
import "../styles/About.css";
import profileImg from "../img/pp.png";
import { FaUserGraduate } from "react-icons/fa";
import { MdCamera } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";  // from react-icons/bi

function About() {
  return (
    <div className="about-page">
      <h1 className="about-header">About Me</h1>

      <div className="about-main-box">
        <div className="about-left">
          <h2> Prodipta Chakraborty</h2>
          <p>3rd Year</p><br></br><p>Up to Date</p>

        </div>
        <div className="about-right">
          <img src={profileImg} alt="profile" />
        </div>
      </div>

      <div className="about-info-section">
        <div className="info-box">
          <FaUserGraduate className="info-icon" />
          <h3>Student</h3>
          <p>3rd Year<br />Passionate about Web Dev & AIML</p>
        </div>

        <div className="info-box">
          <MdCamera className="info-icon" />
          <h3>Marks</h3>
          <p>86% (10th) + 80% (12th) + 8.6 CGPA (B.Tech)</p>
        </div>
        
      </div>
      <div className="about-info-section">
        <div className="info-box">
         <FaCertificate className="info-icon" />

          <h3>Internship</h3>
          <p>Deloitte :technology job stimulation</p>
          <p>Unified Mentor :CNN</p>
          <p>The Glen: StayFinder(airbnb prototype)</p>
        </div>

        <div className="info-box">
          <FaLaptopCode className="info-icon"  style={{ marginRight: '20px' }} />
          <BiBrain className="info-icon" />
          <h3>Tech</h3>
          <p>Web Dev, ML, AI</p>
        </div>
        
      </div>
    </div>
  );
}

export default About;
