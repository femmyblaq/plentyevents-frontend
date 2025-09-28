import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Masonry from "react-masonry-css";
import styles from "./ServicesCard.module.css";

const ServicesCard = () => {
  const users = [
    {
      id: 1,
      role: "Vendor",
      firstName: "John",
      lastName: "Doe",
      email: "john@vendor.com",
      businessName: "Doe Catering",
      businessDescription: "Professional catering services for weddings & events.",
      image: "https://img.freepik.com/free-photo/front-view-woman-working-service-industry_23-2150722812.jpg?w=740",
    },
    {
      id: 2,
      role: "Waiter",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@waiter.com",
      businessName: "Event Waitress Pro",
      businessDescription: "Experienced waitress with a passion for hospitality.",
      image: "https://img.freepik.com/premium-photo/young-black-man-as-server-holding-food-tray_236854-54785.jpg?w=740",
    },
    {
      id: 3,
      role: "Vendor",
      firstName: "Mike",
      lastName: "Brown",
      email: "mike@vendor.com",
      businessName: "Brown Cocktails",
      businessDescription: "Signature cocktails and bar services.",
      image: "https://img.freepik.com/free-photo/bartender-preparing-drink-bar_23-2150444010.jpg?w=740",
    },
    {
      id: 4,
      role: "Waiter",
      firstName: "Sarah",
      lastName: "Lee",
      email: "sarah@waiter.com",
      businessName: "Hospitality Queen",
      businessDescription: "Professional service with a smile, 5+ years in events.",
      image: "https://img.freepik.com/free-photo/smiling-waitress-holding-tray-with-drinks_23-2148129924.jpg?w=740",
    },
    {
      id: 5,
      role: "Vendor",
      firstName: "Carlos",
      lastName: "Martinez",
      email: "carlos@vendor.com",
      businessName: "Flavors Catering",
      businessDescription: "Exquisite international dishes for luxury events.",
      image: "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208270.jpg?w=740",
    },
    {
      id: 6,
      role: "Waiter",
      firstName: "Tom",
      lastName: "Green",
      email: "tom@waiter.com",
      businessName: "Service Pro",
      businessDescription: "Dedicated waiter for high-end private parties.",
      image: "https://img.freepik.com/free-photo/young-waiter-serving-customers-restaurant_23-2148676389.jpg?w=740",
    },
    {
      id: 7,
      role: "Vendor",
      firstName: "Alice",
      lastName: "Wong",
      email: "alice@vendor.com",
      businessName: "Elegant Events",
      businessDescription: "Specialized in luxury weddings & corporate catering.",
      image: "https://img.freepik.com/free-photo/woman-decorating-cake-with-flowers_23-2148684373.jpg?w=740",
    },
    {
      id: 8,
      role: "Waiter",
      firstName: "David",
      lastName: "King",
      email: "david@waiter.com",
      businessName: "Royal Service",
      businessDescription: "Experienced banquet waiter with a smile.",
      image: "https://img.freepik.com/free-photo/happy-waiter-cafe-serving-customers_23-2148674556.jpg?w=740",
    },
  ];

  // Masonry breakpoints for Pinterest effect
  const breakpointColumnsObj = {
    default: 4, // 4 columns on large screens
    1200: 4,
    992: 3,
    768: 2,
    576: 1,
  };

  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={`${styles.top}`}>
      <h1 className={styles.gradientHeading}>Discover Our Vendors & Waiters</h1>
      <p className="text-muted text-center m-auto w-75 fs-5">
            Connect with top-rated vendors and skilled waiters for your events.
            Browse their profiles, learn about their services, and hire the <span className="fw-bold" style={{color: "#93e704"}}>best
            fit for your special occasion.</span> 
          </p>
          <button className="btn btn-success rounded-5 btn-lg mt-3 w-25 mx-auto">
            Get Started
          </button>
          </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {users.map((user) => (
          <div
            key={user.id}
            className={`${styles.userCard} ${
              user.role === "Vendor" ? styles.vendorBorder : styles.waiterBorder
            } card p-3 mb-4`}
          >
            <img
              src={user.image}
              alt={user.firstName}
              className={`card-img-top rounded ${styles.cardImage}`}
            />
            <div className="card-body">
              <h5 className="card-title">
                {user.firstName} {user.lastName}
              </h5>
              <p className="card-text mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="card-text mb-1">
                <strong>Business:</strong> {user.businessName}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {user.businessDescription}
              </p>
              <span
                className={`${styles.roleBadge} ${
                  user.role === "Vendor" ? styles.vendorBadge : styles.waiterBadge
                } badge`}
              >
                {user.role}
              </span>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ServicesCard;
