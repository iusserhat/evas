import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css'; // Import a CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id', 
        'your_template_id', 
        e.target,           
        'your_user_id'
      )
      .then(
        (result) => {
          alert(`Thank you, ${formData.name}! We will get back to you soon.`);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
