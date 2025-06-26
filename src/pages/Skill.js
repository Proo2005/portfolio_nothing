import React from "react";
import "../styles/skill.css";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact,
  FaDatabase, FaPython, FaFigma
} from "react-icons/fa";
import { SiMongodb, SiDjango, SiExpress, SiKaggle } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { BiBrain } from "react-icons/bi"; // Brain icon as stand-in for CNN



function Skills() {
  return (
    <div className="skills-page">
      <h1 className="skills-title">MY SKILLS</h1>

      <div className="skills-section">
        <div className="skill-category">
          <h2 className="category-heading">WEB</h2>
          <div className="skills-grid web">
            <div className="skill-item"><FaHtml5 /><span>HTML</span></div>
            <div className="skill-item"><FaCss3Alt /><span>CSS</span></div>
            <div className="skill-item"><FaJsSquare /><span>JavaScript</span></div>
            <div className="skill-item"><FaNodeJs /><span>Node.js</span></div>
            <div className="skill-item"><FaReact /><span>React</span></div>
            <div className="skill-item"><SiMongodb /><span>MongoDB</span></div>
            <div className="skill-item"><FaDatabase /><span>SQL</span></div>
            <div className="skill-item"><SiExpress /><span>Express</span></div>
            <div className="skill-item"><SiDjango /><span>Django</span></div>
            <div className="skill-item"><FaFigma /><span>Figma</span></div>
          </div>
        </div>

        <div className="skill-category">
          <h2 className="category-heading">AIML</h2>
          <div className="skills-grid aiml">
            <div className="skill-item"><FaPython /><span>Python</span></div>
            <div className="skill-item"><SiKaggle /><span>Kaggle</span></div>
            <div className="skill-item"><BiBrain /><span>CNN</span></div>
            <div className="skill-item"><SiScikitlearn /><span>scikit-learn</span></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
