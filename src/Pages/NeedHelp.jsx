import React from "react";
import { Link } from "react-router-dom";
import styles from "./NeedHelp.module.css";

const helpTopics = [
  {
    title: "How to Find Waiters",
    description:
      "Browse available waiters by visiting the Services or Vendor Dashboard. Use filters to narrow down your search by location, experience, or rating.",
    action: <Link to="/services" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>Go to Services</Link>,
    cardClass: styles.cardGreen,
  },
  {
    title: "How to Hire a Waiter",
    description:
      "Once you find a suitable waiter, click on their profile to view details. Use the 'Hire' button to send a request. You will be notified once your request is accepted.",
    action: <Link to="/vendor-dashboard" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>Go to Vendor Dashboard</Link>,
    cardClass: styles.cardDark,
  },
  {
    title: "How to Register as a Vendor",
    description:
      "If you want to offer services, register as a vendor by filling out the registration form. Provide all required details and upload necessary documents.",
    action: <Link to="/vendor-register" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>Register as Vendor</Link>,
    cardClass: styles.cardLight,
  },
  {
    title: "Resetting Your Password",
    description:
      "Forgot your password? Use the 'Forgot Password' link on the login page to reset your password. Follow the instructions sent to your email.",
    action: <Link to="/forget-password" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>Reset Password</Link>,
    cardClass: styles.cardYellow,
  },
  {
    title: "Contact Support",
    description:
      "If you need further assistance, reach out to our support team through the Contact page. We are here to help you!",
    action: <Link to="/contact" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>Contact Support</Link>,
    cardClass: styles.cardCream,
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about using the platform, hiring, payments, and more.",
    action: <Link to="/faq" className={`btn btn-outline-primary btn-sm mt-2 ${styles.btnCustom}`}>View FAQ</Link>,
    cardClass: styles.cardGreen,
  },
];

const NeedHelp = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Need Help?</h2>
      <p className="text-center mb-5">
        Here are some guides to help you navigate and use the PlentyEvents platform.
      </p>
      <div className="row">
        {helpTopics.map((topic, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className={`card h-100 shadow-sm ${topic.cardClass}`}>
              <div className="card-body">
                <h5 className={`card-title ${styles.cardTitle}`}>{topic.title}</h5>
                <p className="card-text">{topic.description}</p>
                {topic.action}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedHelp;