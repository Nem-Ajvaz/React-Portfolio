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
      !validateInput(name) ||
      !validateInput(email) ||
      !validateInput(message)
    ) {
      setErrorMessage("Esnure no fields are empty");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Enter a valid email");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  const handleFormEmpty = (e) => {
    if (
      !validateInput(name) ||
      !validateInput(email) ||
      !validateInput(message)
    ) {
      setErrorMessage("Ensure no fields are blank");
    } else if (!validateEmail(email)) {
      setErrorMessage("Enter a valid email");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h1 className="contactH1">Contact Me</h1>
      </div>

      <form className="formContainer">
        <p>
          Name:
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onInput={handleFormEmpty}
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
            onInput={handleFormEmpty}
            type="email"
            placeholder="Please enter your email address"
          />
        </p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onInput={handleFormEmpty}
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
        <button type="button" onClick={handleFormSubmit}>
          {" "}
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
