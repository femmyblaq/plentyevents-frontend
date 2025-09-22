import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./RatingsReviews.module.css";

const RatingsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.example.com/vendor/ratings") // replace with your endpoint
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ratings:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} text-white`}><i class="ri-star-fill text-warning"></i> My Ratings & Reviews</h2>

      {loading ? (
        <p className={styles.loading}>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className={styles.empty}>No reviews available.</p>
      ) : (
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {"⭐".repeat(review.rating)}{" "}
                <span className={styles.score}>({review.rating})</span>
              </div>
              <p className={styles.feedback}>"{review.feedback}"</p>
              <div className={styles.footer}>
                <span className={styles.vendor}>{review.vendorName}</span>
                <span className={styles.date}>
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingsReviews;
