// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';  // Import the CSS for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // You can handle the form submission here (e.g., send to a backend service)
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
