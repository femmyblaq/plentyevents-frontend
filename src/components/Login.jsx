import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./Auth.css";
import iamImg from "../images/tunde.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../api/axios.js"
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // <-- Add this

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // || !formData.role
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields and select a role.");
      return;
    }

    try {
      const res = api.post("/vendors/auth/login", formData);
      console.log(res.data);
      setMessage("Login successful");

      if(res.data.token){
        localStorage.setItem("token", res.data.token);
      }
      navigate("/vendor-dashboard");

    } catch (err) {
      setLoading(false); // <-- Stop loading
            if (error.response) {
                setMessage(error.response.data.message || "Registration failed");
                setError(error.response.data.message || "Registration failed");
            } else {
                setMessage("Network error, please try again.");
                setError("Network error, please try again.");
            }
    }

    // 🔑 Get stored user from localStorage
    // const storedUser = JSON.parse(localStorage.getItem("user"));

    // if (
    //   storedUser &&
    //   storedUser.email === formData.email &&
    //   storedUser.password === formData.password &&
    //   storedUser.role === formData.role
    // ) {
    //   // ✅ Login success
    //   localStorage.setItem("user", JSON.stringify(storedUser));

    //   if (formData.role === "vendor") {
    //     navigate("/vendor-dashboard");
    //   } else {
    //     navigate("/worker-dashboard");
    //   }
    // } else {
    //   setError("Invalid email, password, or role. Please try again.");
    // }
  };

  return (
    <div className="auth-page">
      {/* Left side with the login form */}
      <div className="auth-left" data-aos="fade-right">
        <div className="form-box">
          <h2>Login</h2>
          <p>Welcome back!</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Email"
              />
            </div>

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
            </div>

            <div className="input-group" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="auth-btn">
              SIGN IN
              <div className="btn-glow"></div>
            </button>
          </form>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <div className="separator">or</div>

          <div className="social-signup">
            <button className="google-btn">
              <FcGoogle className="icon" /> Sign in with Google
            </button>
            <button className="apple-btn">
              <FaApple className="icon" /> Sign in with Apple
            </button>
          </div>

          <p className="switch-link">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      {/* Right side with image and overlay */}
      <div className="auth-right" data-aos="fade-left">
        <img src={iamImg} alt="Vendor connection" />
        <div className="overlay">
          <h1>Access Trusted Vendors</h1>
          <p>Connect to manage your vendor profile and grow your network.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
