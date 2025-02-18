import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import Navbar from '../components/Navbar';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <Navbar/>
    <div className="containers">
      <h2 className="heading">Get in touch</h2>
      <div className="button-group">
        <a
          href="https://www.linkedin.com/in/niraj-sriramula-b6716a89/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="icon-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
            alt="Download"
            className="icon"
          />
        </a>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input textarea"
            required
          />
        </div>
        <button type="submit" className="button">
          Send message
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;