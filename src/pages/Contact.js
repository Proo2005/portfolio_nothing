import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wqmfemb",
        "template_zhutzma",
        form.current,
        "mDL0KnNg8AV0aHzvl"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-header">Contact</h1>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-row">
          <input name="name" type="text" placeholder="Enter Name" className="input-box" />
          <input name="email" type="email" placeholder="Enter Email" className="input-box" />
        </div>
        <textarea name="message" placeholder="Send Message" className="message-box"></textarea>
        <button type="submit" className="send-button">
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}

export default Contact;
