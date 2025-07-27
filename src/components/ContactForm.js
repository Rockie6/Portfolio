import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Here you would send the form data to your email or backend
    setSubmitted(true);
  };

  return (
    <section className="contact-form-section">
      <h2>Contact Me</h2>
      {submitted ? (
        <div className="form-success">Thank you! I'll get back to you soon.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;