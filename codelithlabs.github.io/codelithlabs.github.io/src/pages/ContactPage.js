import React from 'react';
import '../styles/ContactPage.css';
import RegistrationForm from '../components/RegistrationForm';

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have a question or want to work with us? Send us a message!</p>
      <p><strong>Email:</strong> team.codelithlabs@gmail.com</p>
      <div className="contact-form-wrapper">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default ContactPage;
