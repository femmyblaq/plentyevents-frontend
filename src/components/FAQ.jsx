import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SupportPages.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Your questions answered — find quick help here.</p>
      </div>

      <div className="support-content">
        <section data-aos="fade-up">
          <h2>What is PLENTYEVENTS?</h2>
          <p>
            PLENTYEVENTS is a platform that connects users with reliable waiters for catering,
            drinks, cocktails, and event decoration services. We make hiring fast and trusted.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>How do I create an account?</h2>
          <p>
            Click on "Join Us" or "Create Account" on the navigation bar. Fill in your details,
            and you'll be set up in minutes.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Is it free to use?</h2>
          <p>
            Yes, browsing waiters and creating an account is completely free. We only charge vendors a small commission for bookings made through PLENTYEVENTS.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>How do I contact a waiter?</h2>
          <p>
            Simply click the "Hire" button on a waiter’s profile. You’ll be prompted to log in or create an account to proceed with messaging and booking.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Can I rate or review a waiter?</h2>
          <p>
            Yes, after a successful booking, you'll be able to leave feedback and rate your waiter's experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
