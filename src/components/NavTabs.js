import React from "react";
import Typewriter from "typewriter-effect";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navBarContainer">
        <h1>Nem Ajvaz</h1>
        <ul className="nav-links">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section className="typeWrtier">
        <Typewriter
          options={{
            strings: [
              "JavaScript",
              "NodeJS",
              "React",
              "SQL",
              "HTML",
              "CSS",
              "Scrum",
              "Kanban",
              "Jira",
              "NPM",
            ],
            autoStart: true,
            loop: true,
          }}
        ></Typewriter>
      </section>
    </div>
  );
}

export default NavTabs;
