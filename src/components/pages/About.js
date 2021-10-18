import React from "react";
import Portrait from "../../assets/images/me.jpg";

export default function About() {
  return (
    <div className="about-me">
      <img src={Portrait} alt="Self Portrait" className="portrait" />
      <div>
        <h2> I'm Nem</h2>
        <p className="about-me-p">
          I graduated from RMIT with a Bachelor of Engineering (Computing and
          Networking) in 2017. Since then I have been employed by Mondo, a
          subsidiary of Ausnet Services, who focus on spacial enterprise
          software. I started out as an Application Support Technician and
          gradually moved up to a Team Lead position and now I work as a Service
          Delivery Manager / psuedo Scrum Master.
        </p>
        <p className="about-me-p">
          My goal for the last year has been to get a full time job as a Scrum
          Master / Agile Coach. I joined University of Sydneys Web Development
          Bootcamp to learn some technical skills and to gain a more intimate
          knowledge of a developers day to day life, which I think will be
          beneficial for a Scrum Master
        </p>
        <p className="about-me-p">
          Outisde of work I enjoy playing and watching chess, reading, long
          distance cycling and dabbling in amateur photography.
        </p>
      </div>
    </div>
  );
}
