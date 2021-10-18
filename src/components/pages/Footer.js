import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-links">
        <ul>
          <li className="footer-li">
            <a href="https://www.linkedin.com/in/nemanja-ajvaz-17a400175/">
              LinkedIn
            </a>
          </li>
          <li className="footer-li">
            <a href="https://github.com/Nem-Ajvaz">GitHub</a>
          </li>
          <li className="footer-li">
            <a href="mailto: nemanja.ajvaz@gmail.com">Email Me</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
