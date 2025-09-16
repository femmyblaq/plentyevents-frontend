import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SupportPages.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="support-page">
      <div className="support-hero">
        <h1>How It Works</h1>
        <p>Understand the simple steps to hire waiters through PLENTYEVENTS.</p>
      </div>

      <div className="support-content">
        <section data-aos="fade-up">
          <h2>Step 1: Sign Up or Log In</h2>
          <p>
            Create a free account using your email or sign in with Google or Apple. You’ll need an account to interact with waiters and book services.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Step 2: Explore Services</h2>
          <p>
            Browse waiter categories such as catering, cocktails & drinks, and decorators. Use filters or keywords to find the best match for your event.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Step 3: View waiter Profiles</h2>
          <p>
            Each waiter profile includes images, descriptions, locations, and customer feedback. Get to know the service before making your decision.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Step 4: Hire a Waiter</h2>
          <p>
            Once you find a waiter you like, click “Hire.” You’ll be asked for event details, preferred dates, and contact information. The waiter will respond shortly.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Step 5: Stay Connected</h2>
          <p>
            After hiring, communicate directly through your dashboard. Track progress, make updates, and enjoy seamless service delivery for your event.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
