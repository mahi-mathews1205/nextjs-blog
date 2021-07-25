import { useState } from "react";

import classes from "./contact-form.module.css";

const ContactForm = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredMessage, setMessage] = useState("");

  return (
    <section
      className={classes.contact}
      onSubmit={(e) =>
        props?.handleFormSubmit(e, {
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        })
      }
    >
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              onBlur={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              onBlur={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
