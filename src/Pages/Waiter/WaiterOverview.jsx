import React from "react";
import { Card, Button, Table, ProgressBar } from "react-bootstrap";
import styles from "./WaiterOverview.module.css";

const WaiterDashboard = () => {
  // Sample data
  const jobs = [
    { id: 1, vendor: "John's Catering", role: "Event Waiter", pay: "₦10,000", location: "Lagos", date: "2025-09-25" },
    { id: 2, vendor: "Elite Dishes", role: "Wedding Waiter", pay: "₦12,500", location: "Abuja", date: "2025-09-30" },
  ];

  const ratings = [
    { id: 1, vendor: "John's Catering", stars: 4, feedback: "Punctual and hardworking", date: "2025-09-15" },
    { id: 2, vendor: "Elite Dishes", stars: 5, feedback: "Excellent service!", date: "2025-09-10" },
  ];

  return (
    <div className={`${styles.dashboardContainer} p-4 rounded-4`}>
      {/* Header */}
      <header className={styles.dashboardHeader}>
        <h2>Worker Dashboard</h2>
        {/* <div className={styles.profileActions}>
          <span className={styles.bell}>🔔</span>
          <Button variant="outline-light" size="sm">Logout</Button>
        </div> */}
      </header>

      {/* Overview Cards */}
      <div className={`${styles.overviewCards} mb-4`}>
        <Card className={`${styles.dashCard} ${styles.greenGradient}`}>
          <Card.Body>
            <h5>Jobs Available</h5>
            <h3>{jobs.length}</h3>
          </Card.Body>
        </Card>
        <Card className={`${styles.dashCard} ${styles.blueGradient}`}>
          <Card.Body>
            <h5>Average Rating</h5>
            <h3>4.5 <i class="ri-star-fill text-warning"></i></h3>
            <ProgressBar now={90} label="90%" />
          </Card.Body>
        </Card>
        <Card className={`${styles.dashCard} ${styles.purpleGradient}`}>
          <Card.Body>
            <h5>Hired Count</h5>
            <h3>12</h3>
          </Card.Body>
        </Card>
      </div>

      {/* Jobs Section */}
      <section>
        <h4>Available Hires</h4>
        <Table bordered hover responsive className={styles.darkTable}>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Role</th>
              <th>Pay</th>
              <th>Location</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.vendor}</td>
                <td>{job.role}</td>
                <td>{job.pay}</td>
                <td>{job.location}</td>
                <td>{job.date}</td>
                <td><Button variant="success" size="sm">Apply</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

      {/* Ratings Section */}
      <section>
        <h4>My Ratings & Reviews</h4>
        {ratings.map(r => (
          <Card key={r.id} className={styles.ratingCard}>
            <Card.Body>
              <strong>{r.vendor}</strong> - {r.stars}⭐ <br />
              <em>"{r.feedback}"</em>
              <p className="text-muted small">{r.date}</p>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default WaiterDashboard;
