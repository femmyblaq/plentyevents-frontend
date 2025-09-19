import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from  "../Pages/ForgotPassword.module.css"; // Optional: for custom styles
import leftImg from "../images/tunde.jpg";// Replace with your image path

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call for password reset
    setSubmitted(true);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center forget-password-bg">
      <div className="row w-100" style={{ minHeight: "80vh" }}>
        {/* Left Side Image */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-0">
          <img
            src={leftImg}
            alt="Forgot Password"
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ maxHeight: "700px", borderRadius: "2rem" }}
          />
        </div>
        {/* Right Side Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: 400 }}>
            <h2 className="mb-4 text-center">Forgot Your Password?</h2>
            <p className="mb-4 text-muted text-center">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Reset Link
              </button>
            </form>
            {submitted && (
              <div className="alert alert-success mt-3 text-center" role="alert">
                If your email exists, a reset link has been sent!
              </div>
            )}
            <div className="mt-4 text-center">
              <a href="/login" className="text-decoration-none">
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;