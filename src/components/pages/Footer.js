import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
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
            <a href="https://stackoverflow.com/users/16861130/iamnem">
              Stack OverFlow
            </a>
          </li>
        </ul>
      </div>
      <div className="copyRight">&copy; Nemanja Ajvaz 2021</div>
    </footer>
  );
}
