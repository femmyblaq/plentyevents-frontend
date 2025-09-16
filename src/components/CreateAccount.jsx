import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Auth.css";
import iamImg from "../images/iam.jpeg";

const CreateAccount = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    state: "",
    lga: "",
    address: "",
    phone: "",
    email: "",
    nextOfKin: "",
    crime: "",
    substance: "",
    education: "",
    waiterExperience: "",
    training: "",
    availability: "",
    pressure: "",
    guarantorName: "",
    guarantorRelation: "",
    guarantorAddress: "",
    guarantorPhone: "",
    guarantorEmail: "",
    guarantorOccupation: "",
    password: "",
    service: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    //  Save user in localStorage
    const user = { role: "worker", email: formData.email, name: formData.fullName };
    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Account created successfully!");
    setTimeout(() => {
      navigate("/worker-dashboard");
    }, 1000);
  };


  return (
    <div className="auth-page">
      <div className="auth-left" data-aos="fade-right">
        <div className="form-box">
          <h2>Create an Account</h2>
          <p>Join our trusted platform for event planners and vendors</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/*  Personal Information */}
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Full Name (First, Middle, Last)"
              />
            </div>

            <div className="input-group">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="input-field select-service"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-group">
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
                className="input-field select-service"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="State of Origin"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lga"
                value={formData.lga}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Local Government Area (LGA)"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Residential Address"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Phone Number"
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

            {/* ✅ Next of Kin */}
            <div className="input-group">
              <input
                type="text"
                name="nextOfKin"
                value={formData.nextOfKin}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Next of Kin (Name, Relationship, Phone)"
              />
            </div>

            {/* ✅ Yes / No Questions */}
            <div className="input-group yesno-group">
              <p>Have you ever been convicted of a crime?</p>
              <label>
                <input
                  type="radio"
                  name="crime"
                  value="yes"
                  checked={formData.crime === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="crime"
                  value="no"
                  checked={formData.crime === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="input-group yesno-group">
              <p>Do you currently use or abuse any substance?</p>
              <label>
                <input
                  type="radio"
                  name="substance"
                  value="yes"
                  checked={formData.substance === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="substance"
                  value="no"
                  checked={formData.substance === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Highest Level of Education"
              />
            </div>

            <div className="input-group yesno-group">
              <p>Have you worked as a waiter before?</p>
              <label>
                <input
                  type="radio"
                  name="waiterExperience"
                  value="yes"
                  checked={formData.waiterExperience === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="waiterExperience"
                  value="no"
                  checked={formData.waiterExperience === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="input-group yesno-group">
              <p>Do you have any hospitality/catering training?</p>
              <label>
                <input
                  type="radio"
                  name="training"
                  value="yes"
                  checked={formData.training === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="training"
                  value="no"
                  checked={formData.training === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="input-group yesno-group">
              <p>Willing to work evenings, weekends, and holidays?</p>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="yes"
                  checked={formData.availability === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="no"
                  checked={formData.availability === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="input-group yesno-group">
              <p>Can you work under pressure?</p>
              <label>
                <input
                  type="radio"
                  name="pressure"
                  value="yes"
                  checked={formData.pressure === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="pressure"
                  value="no"
                  checked={formData.pressure === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            {/* ✅ Guarantor Info */}
            <div className="input-group">
              <input
                type="text"
                name="guarantorName"
                value={formData.guarantorName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Full Name"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="guarantorRelation"
                value={formData.guarantorRelation}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Relationship to Applicant"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="guarantorAddress"
                value={formData.guarantorAddress}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Residential Address"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="guarantorPhone"
                value={formData.guarantorPhone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Phone Number"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="guarantorEmail"
                value={formData.guarantorEmail}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Email Address"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="guarantorOccupation"
                value={formData.guarantorOccupation}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Guarantor’s Occupation/Place of Work"
              />
            </div>

            {/* ✅ Service Selection */}
            <div className="input-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="input-field select-service"
              >
                <option value="">Select Service</option>
                <option value="drinks">Drinks</option>
                <option value="catering">Catering</option>
                <option value="decorators">Decorators</option>
              </select>
            </div>

            {/* ✅ Role Selection
            <div className="input-group role-select">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="vendor"
                  checked={formData.role === "vendor"}
                  onChange={handleChange}
                  required
                />
                Vendor
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="worker"
                  checked={formData.role === "worker"}
                  onChange={handleChange}
                />
                Worker
              </label>
            </div> */}

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

            <button type="submit" className="auth-btn">
              Sign Up
              <div className="btn-glow"></div>
            </button>
          </form>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

          <div className="separator">or</div>

          <div className="social-signup">
            <button className="google-btn">
              <FcGoogle className="icon" /> Sign up with Google
            </button>
            <button className="apple-btn">
              <FaApple className="icon" /> Sign up with Apple
            </button>
          </div>

          <p className="switch-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>

      <div className="auth-right" data-aos="fade-left">
        <img src={iamImg} alt="Vendor connection" />
        <div className="overlay">
          <h1>Grow Your Vendor Business</h1>
          <p>
            Join a trusted platform connecting event planners and clients with reliable vendors.
            Boost your reach and reputation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
