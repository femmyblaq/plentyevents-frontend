import React, { useState, useEffect } from "react";
import "./Profile.css"; // Add this line for external styling
import api from "../../api/axios";
const Profile = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    brandName: "",
    officeAddress: "",
    phone: "",
    email: "",
    cacProof: null,
    yearsOfOperation: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Load profile from backend when page loads
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/profile");
        setFormData(res.data);
        if (res.data.avatarUrl) setAvatarPreview(res.data.avatarUrl);
      } catch (err) {
        console.error("Failed to fetch profile:", err.message);
      }
    };
    fetchProfile();
  }, []);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Handles avatar and cacProof
      setFormData({ ...formData, [name]: files[0] });
      if (name === "avatar") {
        setAvatarPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });

      await api.put("/auth/profile", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Profile updated!");
    } catch (err) {
      setError(err.message);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess("");

  //   try {
  //     // Create FormData instance
  //     const data = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       if (formData[key]) {
  //         data.append(key, formData[key]);
  //       }
  //     });

  //     const res = await api.put(`/auth/profile`, data, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(res.data);
  //     setSuccess("Profile updated successfully!");
  //   } catch (err) {
  //     console.error(err.response?.data || err.message);
  //     setError("Error updating profile");
  //   } finally {
  //     setLoading(false);
  //   }

  // };

  return (
    <div className="container py-5">
      <h2 className="text-black mb-3">Profile</h2>
      <p>Manage your profile information and settings.</p>


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
      <div className="row mt-4">
        {/* Avatar Upload - Left Side */}
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-start">
          <div className="mb-3 w-100">
            <label className="form-label">Profile Image</label>
            <div className="mb-2">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="img-fluid rounded-circle border"
                  style={{ width: 120, height: 120, objectFit: "cover" }}
                />
              ) : (
                <div
                  className="bg-light rounded-circle border d-flex align-items-center justify-content-center"
                  style={{ width: 120, height: 120 }}
                >
                  <span className="text-muted">No Image</span>
                </div>
              )}
            </div>
            <input
              type="file"
              className="form-control dark-input"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Profile Form - Right Side */}
        <div className="col-md-8">
          <form className="bg-dark-ash rounded p-4 shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name of Vendor</label>
              <input
                type="text"
                className="form-control dark-input"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                placeholder="Enter vendor's name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name of Brand/Company</label>
              <input
                type="text"
                className="form-control dark-input"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Enter brand or company name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Office Address</label>
              <input
                type="text"
                className="form-control dark-input"
                name="officeAddress"
                value={formData.officeAddress}
                onChange={handleChange}
                placeholder="Enter office address"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone number/Whatsapp number</label>
              <input
                type="tel"
                className="form-control dark-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone or WhatsApp number"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control dark-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Proof of Incorporation (C.A.C)</label>
              <input
                type="file"
                className="form-control dark-input"
                name="cacProof"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Years of Operations</label>
              <input
                type="number"
                className="form-control dark-input"
                name="yearsOfOperation"
                value={formData.yearsOfOperation}
                onChange={handleChange}
                placeholder="Enter number of years"
                min="0"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;