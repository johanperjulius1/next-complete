import styles from "./contact-form.module.css";
import { useState } from "react";

export default function ContactForm() {
  function sendMessageHandler(event) {
    event.preventDefault();
    // optional: add client-side validation

    const [emailInput, setEmailInput] = useState();
    const [nameInput, setNameInput] = useState();
    const [messageInput, setMessageInput] = useState();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        message: messageInputRef.current.value,
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
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5"></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
