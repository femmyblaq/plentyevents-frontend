import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SupportPages.css";

const HelpCenter = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1>Help Center</h1>
        <p>Need assistance? Find helpful guides and support below.</p>
      </div>

      <div className="support-content">
        <section data-aos="fade-up">
          <h2>Getting Started</h2>
          <p>
            To get started, simply create a free account using your email or sign in with Google or Apple. Once logged in, you can browse, hire, and connect with verified waiters.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Editing Your Profile</h2>
          <p>
            Go to your account dashboard and click on “Edit Profile.” Update your information, profile image, or waiter preferences easily from there.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Managing Bookings</h2>
          <p>
            All your bookings can be found under the “My Bookings” tab. From there, you can confirm events, contact waiters, or cancel if necessary.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Reporting an Issue</h2>
          <p>
            If you experience any issues with a waiter or the platform, go to the “Report” section in your dashboard or contact our support team directly at <strong>support@dista.com</strong>.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Technical Support</h2>
          <p>
            For technical help such as login errors, bugs, or navigation problems, clear your browser cache and try again. If the issue persists, contact our technical team through the Help Center.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
