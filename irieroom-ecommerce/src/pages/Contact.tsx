import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out through any of these channels:</p>

            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <p>hello@theirieroom.com</p>
                </div>
              </div>

              <div className="contact-method">
                <Phone size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (876) 555-IRIE</p>
                </div>
              </div>

              <div className="contact-method">
                <MapPin size={24} />
                <div>
                  <h3>Location</h3>
                  <p>127.5 Waterloo Lane</p>
                  <p>Downtown Kingston, Jamaica</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Visit Our Location</h2>
          <p className="map-description">Come visit us at our Downtown Kingston location</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0245678!2d-76.7866!3d17.9689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU4JzA4LjAiTiA3NsKwNDcnMTEuOCJX!5e0!3m2!1sen!2sjm!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Irie Room Location - 127.5 Waterloo Lane, Downtown Kingston"
            ></iframe>
          </div>
          <div className="map-info">
            <div className="map-detail">
              <MapPin size={20} />
              <span>127.5 Waterloo Lane, Downtown Kingston, Jamaica</span>
            </div>
            <a 
              href="https://www.google.com/maps/dir//127.5+Waterloo+Lane+Downtown+Kingston+Jamaica"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

