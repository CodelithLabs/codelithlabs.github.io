import React, { useState } from 'react';
import '../styles/RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in local storage
    const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push({ ...formData, date: new Date() });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="registration-form-container">
      <h4>Contact Me</h4>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
