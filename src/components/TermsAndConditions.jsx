import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SupportPages.css';

const TermsAndConditions = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1 data-aos="fade-up">Terms & Conditions</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Please read our terms and conditions before using the platform.
        </p>
      </div>

      <div className="support-content">
        <section data-aos="fade-up" data-aos-delay="100">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using PLENTYEVENTS, you agree to be bound by these terms. If you disagree with any part, please do not use our services.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <h2>2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password and for all activities under your account.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="300">
          <h2>3. Service Use</h2>
          <p>
            PLENTYEVENTS may only be used for lawful purposes. Any misuse, impersonation, or fraudulent activity will result in suspension.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="400">
          <h2>4. Vendor Agreements</h2>
          <p>
            When hiring a waiter through PLENTYEVENTS, separate service terms may apply between you and the waiter. PLENTYEVENTS is not liable for disputes.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="500">
          <h2>5. Modifications</h2>
          <p>
            We reserve the right to update or modify these terms at any time. Continued use after changes indicates acceptance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
