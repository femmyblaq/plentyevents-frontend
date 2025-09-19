import React, { useEffect } from "react";
import "./WorkerDashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkerDashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="worker-dashboard">
      <header className="worker-header" data-aos="fade-down">
        <h1>Worker Dashboard</h1>
        <p>Manage your profile and bookings</p>
      </header>

      <main className="worker-main">
        <section className="worker-section" data-aos="fade-up-right">
          <h2>Your Profile</h2>
          <p>Update your info and upload pictures.</p>
        </section>

        <section className="worker-section" data-aos="fade-up-left">
          <h2>Bookings</h2>
          <p>View your current and past bookings.</p>
        </section>
      </main>
    </div>
  );
};

export default WorkerDashboard;
