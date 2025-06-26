import React from "react";
import "../styles/Home.css";
import profileImg from "../img/pp.png";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

function LetterJump({ text }) {
  return (
    <span className="letter-jump">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="jump-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}


function Home() {
  return (
    <>
      <div className="home">
        <div className="home-text">
          <h1>
            <LetterJump text="Web" />&nbsp;
            <LetterJump text="Developer," />
            <br />
            <LetterJump text="AIML" />&nbsp;
            <LetterJump text="Enthusiast" />
          </h1>

          <p>
            I'm Prodipta Chakraborty, a 3rd-year Computer Science student passionate about crafting elegant,
            user-friendly web experiences and solving real-world problems with Artificial Intelligence and
            Machine Learning.
          </p>
        </div>

        <div className="home-img">
          <div className="img-container">
            <img src={profileImg} alt="profile" />
            <div className="glow-segment arc1"></div>
            <div className="glow-segment arc2"></div>
            <div className="glow-segment arc3"></div>
          </div>
        </div>
      </div>

      {/* 🔽 Place this outside .home to keep it always below */}
      <div className="widget-row">
        <Link to="/Project" className="widget-box">
          <div className="widget-icon"><FaProjectDiagram size={32} /></div>
          <div className="widget-label">Projects</div>
        </Link>

        <Link to="/Skill" className="widget-box">
          <div className="widget-icon"><GiSkills size={32} /></div>
          <div className="widget-label">Skills</div>
        </Link>

        <Link to="/About" className="widget-box">
          <div className="widget-icon"><FaUser size={32} /></div>
          <div className="widget-label">About Me</div>
        </Link>

      </div>
    </>


  );
}

export default Home;
