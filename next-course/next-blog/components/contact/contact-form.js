"use client";
import styles from "./contact-form.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

   function sendMessageHandler(event) {
    event.preventDefault();
    // optional: add client-side validation 

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        name: nameInput,
        message: messageInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return response.json().then((data) => {
        throw new Error(data.message || "Something went wrong!");
      });
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            id="message"
            rows="5"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
