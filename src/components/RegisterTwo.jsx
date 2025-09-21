import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Auth.css";
import vendorImg from "../images/iam.jpeg";
import api from "../api/axios.js"

const VendorRegister = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        businessName: "",
        businessDescription: "",
        role: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // <-- Add loading state

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData((p) => ({ ...p, [name]: files[0] || null }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.email ||
            !formData.password ||
            !formData.firstName ||
            !formData.lastName ||
            !formData.phone ||
            !formData.businessName ||
            !formData.businessDescription
        ) {
            setError("Please fill in all required fields.");
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("");
        setLoading(true); // <-- Start loading

        try {
            const res = await api.post("/auth/register", formData);
            console.log(res.data);
            setMessage("Successfully registered");
            setSuccess("Vendor registration successful!");
            setLoading(false); // <-- Stop loading
            setTimeout(() => {
                navigate("/vendor-dashboard");
            }, 1000);
        } catch (error) {
            setLoading(false); // <-- Stop loading
            if (error.response) {
                setMessage(error.response.data.message || "Registration failed");
                setError(error.response.data.message || "Registration failed");
            } else {
                setMessage("Network error, please try again.");
                setError("Network error, please try again.");
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-left" data-aos="fade-right">
                <div className="form-box">
                    <h2>Vendor Registration</h2>
                    <p>Register your business to join our vendor network and reach more clients.</p>

                    {/* Notification message */}
                    {(error || success) && (
                        <div
                            style={{
                                marginBottom: "15px",
                                padding: "10px",
                                borderRadius: "5px",
                                background: error ? "#ffe5e5" : "#e5ffe5",
                                color: error ? "#d8000c" : "#4F8A10",
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            {error || success}
                        </div>
                    )}

                    {/* Preloader */}
                    {loading && (
                        <div style={{ textAlign: "center", marginBottom: "15px" }}>
                            <div className="spinner" />
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="First Name"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Last Name"
                            />
                        </div>


                        <div className="input-group">
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Business Name"
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
                            <select
                            type="select"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="input-field"
                            >
                                <option value="">Select Role</option>
                                <option value="vendor">Vendor</option>
                                <option value="waiter">Waiter</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>


                        <div className="input-group">
                            <input
                                type="text"
                                name="businessDescription"
                                value={formData.businessDescription}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Business Description"
                            />
                        </div>

                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading ? "Registering..." : "Register as Vendor"}
                            <div className="btn-glow"></div>
                        </button>
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

// Simple spinner CSS (add to Auth.css or your CSS file)
/*
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/

export default VendorRegister;