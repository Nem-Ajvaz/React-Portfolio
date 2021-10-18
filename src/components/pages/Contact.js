import React, { useState } from "react";
import "../../index.css";

import { validateEmail, validateInput } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !validateEmail(email) ||
      !validateInput(name) ||
      !validateInput(message)
    ) {
      setErrorMessage("Please make sure all forms are filled in");

      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h1>Contact Me</h1>
      </div>

      <form className="formContainer">
        <p>
          Name:
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            placeholder="Please enter your name"
          />
        </p>
        <p>
          Email:
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Please enter your email address"
          />
        </p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="What would you like to say.. "
        />
        <div>
          {errorMessage.length > 0 ? (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <button type="submit"> Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
