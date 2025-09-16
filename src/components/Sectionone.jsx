import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Sectionone.css';

import user1 from '../images/mary.jfif';
import user2 from '../images/eddy.jfif';
import user3 from '../images/tunde.jpg';
import user4 from '../images/jane.jpg';

const vendors = [
  {
    name: "Mary Egbegbo",
    service: "Catering",
    location: "Anthony, Lagos",
    description: "Specializing in high-quality meals and event service.",
    image: user1,
  },
  {
    name: "Adekunle Olasukanmi",
    service: "Drinks",
    location: "Ikeja, Lagos",
    description: "Refreshing cocktails, mocktails, and soft drinks.",
    image: user2,
  },
  {
    name: "Agu John",
    service: "Cocktails",
    location: "Yaba, Lagos",
    description: "Expert mixologists for your premium events.",
    image: user3,
  },
  {
    name: "Ogunleye Joy",
    service: "Decorators",
    location: "Lekki, Lagos",
    description: "Transforming venues into unforgettable experiences.",
    image: user4,
  },
];

const Sectionone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="section-container">
      {vendors.map((vendor, index) => (
        <div key={index} className="vendor-card" data-aos="fade-up">
          <img src={vendor.image} alt={vendor.name} className="vendor-img" />
          <div className="vendor-info">
            <h2>{vendor.name}</h2>
            <p><strong>Service:</strong> {vendor.service}</p>
            <p><strong>Location:</strong> {vendor.location}</p>
            <p>{vendor.description}</p>
            <button
              className="hire-btn"
              onClick={() => navigate('vendor-register')}
            >
              Hire
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sectionone;
