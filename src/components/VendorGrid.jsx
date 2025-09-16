import React from "react";
import VendorCard from "./VendorCard";
import "./VendorGrid.css";

import use1 from "../images/gal1.jpg";
import use2 from "../images/tunde.jpg";
import use3 from "../images/gal2.jpg";
import use4 from "../images/guy1.jpg";
import use5 from "../images/gal3.jpg";
import use6 from "../images/guy2.jpg";
import use7 from "../images/jane.jpg";
import use8 from "../images/guy3.jpg";
import use9 from "../images/mary.jfif";
import use10 from "../images/guy4.jpg";

const vendors = [
  {
    name: "Adaobi Nwosu",
    image: use1, 
    category: "Caterers",
    bio: "Professional",
    description: "Expert in Nigerian dishes and event catering.",
    rating: 5,
  },
  {
    name: "Tunde Balogun",
    image: use2,
    category: "Event Planners",
    bio: "Creative Strategist",
    description: "Turns every event into a magical experience.",
    rating: 4,
  },
  {
    name: "Chika Okoro",
    image: use3,
    category: "Drink Vendors",
    bio: "Mixologist",
    description: "Refreshing drinks for weddings and parties.",
    rating: 5,
  },
  {
    name: "Emeka Obi",
    image: use4,
    category: "Caterers",
    bio: "Professional Chef",
    description: "Spicy and local menu specialist.",
    rating: 4,
  },
  {
    name: "Zainab Yusuf",
    image: use5,
    category: "Event Planners",
    bio: "Decorator",
    description: "Elegant, modern designs tailored for any event.",
    rating: 5,
  },
  {
    name: "Kunle Ajayi",
    image: use6,
    category: "Drink Vendors",
    bio: "Bartender",
    description: "Cocktail expert for indoor and outdoor parties.",
    rating: 4,
  },
  {
    name: "Ngozi Eze",
    image: use7,
    category: "Caterers",
    bio: "Pastry Chef",
    description: "Bakes cakes, small chops, and event treats.",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    image: use8,
    category: "Drink Vendors",
    bio: "Juice Vendor",
    description: "Natural fruit juices for any kind of celebration.",
    rating: 4,
  },
  {
    name: "Yetunde Alabi",
    image: use9,
    category: "Event Planners",
    bio: "Logistics Coordinator",
    description: "Handles logistics for large weddings and parties.",
    rating: 5,
  },
  {
    name: "Femi Durojaiye",
    image: use10,
    category: "Caterers",
    bio: "Chef & Decorator",
    description: "Combines cooking with small event decor.",
    rating: 4,
  },
];

const VendorGrid = () => {
  return (
    <div className="VendorGrid">
      {vendors.map((vendor, index) => (
        <VendorCard key={index} {...vendor} />
      ))}
    </div>
  );
};

export default VendorGrid;
