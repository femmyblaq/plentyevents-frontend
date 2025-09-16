import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import cateringImg from "../images/catering.jfif";
import drinksImg from "../images/drinks.jpg";
import decorImg from "../images/decor.jfif";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      <header className="services-hero">
        <h1>Explore Our Services</h1>
        <p>Connecting you with verified professionals for your next event.</p>
      </header>

      <section className="services-grid">
        <div className="service-card" data-aos="fade-up">
          <img src={cateringImg} alt="Catering" />
          <h3>Catering</h3>
          <p>Delicious meals prepared and served by professionals for any occasion.</p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="150">
          <img src={drinksImg} alt="Drinks & Cocktails" />
          <h3>Cocktails & Drinks</h3>
          <p>Chilled beverages, premium cocktails, and friendly bartenders for events.</p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <img src={decorImg} alt="Decorators" />
          <h3>Decorators</h3>
          <p>Creative decorators to turn your venue into a stunning experience.</p>
        </div>
      </section>

      <section className="why-us" data-aos="fade-right">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Trusted and verified waiters</li>
          <li>Quality services tailored to your needs</li>
          <li>Easy booking and communication</li>
        </ul>
      </section>

      <div className="services-cta" data-aos="zoom-in">
        <h2>Ready to Hire?</h2>
        <button onClick={() => navigate("/vendor-register")}>Join Now</button>
      </div>
    </div>
  );
};

export default Services;
