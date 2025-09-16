import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <h1>About PLENTYEVENTS</h1>
        <p>Your trusted platform to connect with top-tier event waiters.</p>
      </section>

      {/* Mission Section */}
      <section className="about-section" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p>
          At PLENTYEVENTS, we aim to simplify the waiter discovery process by connecting
          event organizers with verified, professional waiters across Nigeria. We
          believe in reliability, trust, and convenience.
        </p>
      </section>

      {/* How It Works */}
      <section className="about-section" data-aos="fade-right">
        <h2>How It Works</h2>
        <ol>
          <li>Browse waiter profiles across various categories.</li>
          <li>Read detailed information and customer reviews.</li>
          <li>Click "Hire" to begin the booking process — it's that easy!</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="about-section testimonials" data-aos="zoom-in">
        <h2>What Our Users Say</h2>
        <blockquote>
          “PLENTYEVENTS helped us find the perfect caterer for our wedding. Smooth experience!” — Anita O.
        </blockquote>
        <blockquote>
          “We hired a decorator in minutes — the interface is so easy to use!” — James L.
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="about-section call-to-action" data-aos="fade-up">
        <h2>Ready to Hire?</h2>
        <p>Join our growing network of users and waiters today.</p>
        <a href="/create-account" className="cta-button">Create an Account</a>
      </section>
    </div>
  );
};

export default About;
