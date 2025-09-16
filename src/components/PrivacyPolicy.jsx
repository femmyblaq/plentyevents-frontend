import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SupportPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1 data-aos="fade-up">Privacy Policy</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Learn how we protect your personal data and ensure confidentiality.
        </p>
      </div>

      <div className="support-content">
        <section data-aos="fade-up" data-aos-delay="100">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal data such as name, email, and contact details to improve user experience, and to provide relevant services.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <h2>2. How We Use Your Data</h2>
          <p>
            Your data is used strictly for service provision, account creation, customer support, and updates related to your activity on our platform.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="300">
          <h2>3. Data Sharing and Protection</h2>
          <p>
            We never sell your data. We implement strict security measures and only share with trusted waiters or legal authorities when required.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="400">
          <h2>4. Cookies</h2>
          <p>
            Cookies help us track user preferences and behavior to optimize the platform. You can disable them in your browser settings.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="500">
          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your information. Contact support if you'd like to make any changes to your data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
