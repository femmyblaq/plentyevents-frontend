import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./Auth.css";
import iamImg from "../images/tunde.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../api/axios.js"
import { AuthContext } from "../store/AuthContext.jsx";
import NotificationModal from "../components/modal/NotificationModal.jsx";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, loadToken } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [notificationDuration, setNotificationDuration] = useState(2000);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields and select a role.");
      setNotificationMsg("Please fill in all fields and select a role.");
      setNotificationType("error");
      setNotificationDuration(2000);
      setShowNotification(true);
      setLoading(false);
      return;
    }

    const startTime = Date.now();
    try {
      const res = await api.post("/auth/login", formData);
      setMessage("Login successful");
      setLoading(false);
      const { token } = res.data;
      const {role} = res.data.data.user;
      // const role = user.role;
      console.log("Login response:", res.data);
      if (token) {
        console.log("Role:", role);

        login(token, role);
        setNotificationMsg("Login successful! Redirecting...");
        setNotificationType("success");
        // Calculate duration based on how long login took (min 1200ms, max 3000ms)
        const elapsed = Date.now() - startTime;
        const duration = Math.max(1200, Math.min(elapsed + 800, 3000));
        setNotificationDuration(duration);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          if (role === "vendor") {
            navigate("/vendor/dashboard");
          } else if (role === "waiter") {
            navigate("/worker/dashboard");
          } else if (role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/"); // fallback
          }
        }, duration);
      }
    } catch (error) {
      setLoading(false);
      let msg = "Network error, please try again.";
      if (error.response) {
        msg = error?.response.data.message || "Login failed";
      }
      setMessage(msg);
      setError(msg);
      setNotificationMsg(msg);
      setNotificationType("error");
      setNotificationDuration(2200);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2200);
    }
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

            {/* <div className="input-group role-select">
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

            <div className="remember-forgot d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forget-password" className="forgot">
                Forgot Password?
              </Link>
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

      <NotificationModal
        open={showNotification}
        message={notificationMsg}
        duration={notificationDuration}
        type={notificationType}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
};

export default Login;
