import React from "react";
import "./VendorCard.css";

const VendorCard = ({ name, image, category, bio, description, rating }) => {
  return (
    <div className="VendorCard">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="category">{category}</p>
        <p><strong>Bio:</strong> {bio}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Rating:</strong> {"⭐".repeat(rating)}</p>
      </div>
    </div>
  );
};

export default VendorCard;
