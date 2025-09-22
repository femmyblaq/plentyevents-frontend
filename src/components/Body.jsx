import React from "react";
import styles from "./Body.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const LandingBody = () => {
  return (
    <section className={styles.bodySection}>
      <Container>
        {/* Intro text */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className={styles.heading}>Why Choose PlentyEvents?</h2>
            <p className={styles.subtext}>
              We connect <strong>vendors</strong> with trusted{" "}
              <strong>waiters, caterers, bartenders, and event staff</strong>.  
              Whether you’re hosting or looking for work, PlentyEvents makes it seamless.
            </p>
          </Col>
        </Row>

        {/* Features grid */}
        <Row className="g-4">
          <Col md={4}>
            <Card className={`${styles.featureCard} h-100`}>
              <Card.Body>
                <div className={styles.icon}>🎉</div>
                <Card.Title>Hire With Confidence</Card.Title>
                <Card.Text>
                  Vendors can discover top-rated waiters and event staff with verified profiles and ratings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.featureCard} h-100`}>
              <Card.Body>
                <div className={styles.icon}>🍽️</div>
                <Card.Title>Get Event Gigs</Card.Title>
                <Card.Text>
                  Workers can find catering, bartending, and service gigs that fit their skills and schedule.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.featureCard} h-100`}>
              <Card.Body>
                <div className={styles.icon}><i className="ri-star-fill text-warning"></i></div>
                <Card.Title>Trusted Ratings</Card.Title>
                <Card.Text>
                  Both vendors and workers build trust with transparent reviews, feedback, and ratings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to action */}
        <Row className="text-center mt-5">
          <Col>
            <h3 className={styles.ctaHeading}>Your Event Journey Starts Here</h3>
            <p className="text-dark">
              Join today to connect with vendors, waiters, and caterers.  
              Build experiences that guests will never forget.
            </p>
            <button className={`${styles.ctaBtn} btn btn-success me-3 mt-3`}>Join as Vendor</button>
            <button className={`${styles.ctaBtnOutline} btn btn-outline-success mt-3`}>Join as Waiter</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingBody;
