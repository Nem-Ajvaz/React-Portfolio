import React from "react";
import "../../index.css";
import ResumeFile from "../../assets/Nemanja Ajvaz - Service Delivery Manager.pdf";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <h1 className="resumeTitle">Looking for a junior developer?</h1>
      <h3>Some technologies that I have used: </h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>GraphQL</li>
      </ul>
      <button className="resumeBtn" type="button">
        <a
          className="resumeBtnTxt"
          href={ResumeFile}
          download="Nemanja_Ajvaz_Web_Developer"
        >
          Download my resume
        </a>
      </button>
    </div>
  );
}
