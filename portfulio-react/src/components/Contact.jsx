// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="section contact">
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;