import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Masonry from "react-masonry-css";
import styles from "../Pages/NewHome.module.css";

const LandingPage = () => {
  const images = [
    // Waiters
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
    // Bartenders
    "https://images.unsplash.com/photo-1514361892635-cebbd6b8a2b7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    // Waitress
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a6f3b5f0a6?auto=format&fit=crop&w=600&q=80",
    // Caterer
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    // Cocktails
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={`container-fluid bg-dark min-vh-100 py-5 position-relative ${styles.landing}`}>
      {/* Overlay with CTA */}
      <div className={styles.overlay}>
        <h1 className={styles.ctaTitle}>Join PlentyEvents Today</h1>
        <p className={styles.ctaDesc}>
          Discover, hire, and connect with the best waiters, bartenders, waitresses, caterers, and cocktail experts. Whether you're hosting or serving, PlentyEvents is your gateway to seamless event experiences.
        </p>
        <div className={styles.ctaButtons}>
          <a href="/register" className={styles.ctaBtn}>Join as Vendor</a>
          <a href="/register" className={styles.ctaBtnOutline}>Join as Waiter</a>
        </div>
      </div>
      {/* Masonry Images */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((img, index) => (
          <div key={index} className="mb-4">
            <img
              src={img}
              alt={`Landing ${index}`}
              className="w-100 rounded-4 shadow-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default LandingPage;
