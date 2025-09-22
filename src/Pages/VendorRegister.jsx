import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Auth.css";
import vendorImg from "../images/iam.jpeg"; // swap with vendor-specific image

const VendorRegister = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [formData, setFormData] = useState({
    vendorName: "",
    brandName: "",
    officeAddress: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    cacFile: null,
    yearsOfOperation: "",
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((p) => ({ ...p, [name]: files[0] || null }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.vendorName || !formData.brandName || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ Save vendor in localStorage
    const user = {
      role: "vendor",
      email: formData.email,
      name: formData.vendorName,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Vendor registration successful!");
    setTimeout(() => {
      navigate("/vendor-dashboard");
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-left" data-aos="fade-right">
        <div className="form-box">
          <h2>Vendor Registration</h2>
          <p>Register your business to join our vendor network and reach more clients.</p>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="input-group">
              <input
                type="text"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Name of Vendor"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Brand / Company Name"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="officeAddress"
                value={formData.officeAddress}
                onChange={handleChange}
                className="input-field"
                placeholder="Office Address"
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Phone / WhatsApp Number"
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Email Address"
              />
            </div>

            {/* 🔑 Password fields */}
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Password"
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Confirm Password"
              />
            </div>

            <div className="input-group">
              <label style={{ color: "#bbb", display: "block", marginBottom: "8px" }}>
                Proof of Incorporation (C.A.C)
              </label>
              <input
                type="file"
                name="cacFile"
                accept=".pdf,.jpg,.png"
                onChange={handleChange}
                className="input-field"
                style={{ padding: "8px" }}
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="yearsOfOperation"
                value={formData.yearsOfOperation}
                onChange={handleChange}
                className="input-field"
                placeholder="Years of Operations"
                min="0"
              />
            </div>

            <button type="submit" className="auth-btn">
              Register as Vendor
              <div className="btn-glow"></div>
            </button>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
          </form>

          <div className="separator">or</div>

          <div className="social-signup">
            <button className="google-btn" type="button" aria-label="Sign up with Google">
              <FcGoogle className="icon" /> Sign up with Google
            </button>

            <button className="apple-btn" type="button" aria-label="Sign up with Apple">
              <FaApple className="icon" /> Sign up with Apple
            </button>
          </div>

          <p className="switch-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>

      <div className="auth-right" data-aos="fade-left">
        <img src={vendorImg} alt="Vendor" />
        <div className="overlay">
          <h1>Grow Your Brand</h1>
          <p>Register and reach thousands of clients looking for your services.</p>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
