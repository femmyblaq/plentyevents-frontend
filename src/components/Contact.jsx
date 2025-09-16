import React, { useEffect } from "react";
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 data-aos="fade-up">Get in Touch</h1>
        <p data-aos="fade-up" data-aos-delay="200">We'd love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.</p>
      </section>

      <div className="contact-content">
        <div className="contact-form" data-aos="fade-right">
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="6" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info" data-aos="fade-left">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +234 000 000 0000</p>
          <p><strong>Email:</strong> support@dista.com</p>
          <p><strong>Address:</strong> 123, Vendor Street, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
