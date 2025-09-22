import React, { useState } from "react";
import "./Profile.css"; // Add this line for external styling

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
      setAvatarPreview(URL.createObjectURL(files[0]));
    } else if (name === "cacProof") {
      setFormData({ ...formData, cacProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to update vendor profile
    alert("Profile updated!");
  };

  return (
    <div className="container py-5">
      <h2 className="text-black mb-3">Profile</h2>
      <p>Manage your profile information and settings.</p>
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