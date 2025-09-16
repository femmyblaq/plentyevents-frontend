import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RegisterChoice.css";

const RegisterChoice = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="register-choice-container">
      <div className="register-choice-content">
        <h1 data-aos="fade-down">Join Our Platform</h1>
        <p data-aos="fade-up">
          Choose the role that best describes you to get started.
        </p>

        <div className="register-choice-options">
          <Link
            to="/vendor-register"
            className="choice-card vendor"
            data-aos="fade-right"
          >
            <h2>👔 Join as a Vendor</h2>
            <p>
              Post jobs, hire trusted workers, and grow your business with ease.
            </p>
          </Link>

          <Link
            to="/create-account"
            className="choice-card waiter"
            data-aos="fade-left"
          >
            <h2>🧑‍🍳 Join as a Waiter</h2>
            <p>
              Find exciting opportunities, get hired quickly, and showcase your
              skills.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterChoice;
