import React, { useEffect, useState, useRef } from "react";
import styles from "./StartsSection.module.css"
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  const [vendors, setVendors] = useState(0);
  const [waiters, setWaiters] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Intersection Observer to trigger counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // ✅ Animate counters
  useEffect(() => {
    if (visible) {
      let vendorCount = 0;
      let waiterCount = 0;

      const vendorInterval = setInterval(() => {
        vendorCount += 1;
        if (vendorCount <= 150) {
          setVendors(vendorCount);
        } else {
          clearInterval(vendorInterval);
        }
      }, 20);

      const waiterInterval = setInterval(() => {
        waiterCount += 1;
        if (waiterCount <= 300) {
          setWaiters(waiterCount);
        } else {
          clearInterval(waiterInterval);
        }
      }, 10);
    }
  }, [visible]);

  return (
    <div ref={sectionRef} className={styles.sectionWrapper}>
      <Container>
        <Row className="align-items-center">
          {/* Left side image */}
          <Col md={6} className="text-center">
            <img
              src="https://img.freepik.com/free-vector/teamwork-illustration_24908-59308.jpg?w=740"
              alt="People Connecting"
              className={`img-fluid ${styles.leftImage}`}
            />
          </Col>

          {/* Right side counters */}
          <Col md={6} className="text-white">
            <h2 className="mb-4 text-center fw-bold">
              Total Vendors & Workers That Have Joined
            </h2>
            <div className="d-flex justify-content-around">
              <div className={styles.counterBox}>
                <h3 className={styles.counter}>{vendors}+</h3>
                <p className="fw-semibold">Vendors</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counter}>{waiters}+</h3>
                <p className="fw-semibold">Waiters</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;
