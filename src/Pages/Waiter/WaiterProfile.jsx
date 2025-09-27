import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import styles from "./WaiterProfile.module.css";
import api from '../../api/axios';
const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    stateOfOrigin: "",
    lga: "",
    address: "",
    phone: "",
    email: "",
    nextOfKin: { name: "", relationship: "", phone: "" },
    convicted: "",
    convictionDetails: "",
    substanceUse: "",
    education: "",
    waiterExp: "",
    waiterExpDetails: "",
    training: "",
    availability: "",
    underPressure: "",
    guarantor: {
      name: "",
      relationship: "",
      address: "",
      phone: "",
      email: "",
      occupation: "",
    },
    profileImage: null,
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // 🔹 Load from localStorage or API on mount
  useEffect(() => {
    const saved = localStorage.getItem("waiterProfile");
    if (saved) {
      setFormData(JSON.parse(saved));
    } else {
      // fallback: fetch from API
      const fetchProfile = async () => {
        try {
          const res = await api.get("/auth/waiter-profile");
          setFormData(res.data);
        } catch (err) {
          console.error("Error fetching profile:", err.message);
        }
      };
      fetchProfile();
    }
  }, []);

  // 🔹 Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("waiterProfile", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (typeof formData[key] === "object" && formData[key] !== null && !(formData[key] instanceof File)) {
          // stringify nested objects (nextOfKin, guarantor)
          data.append(key, JSON.stringify(formData[key]));
        } else if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      const res = await api.put("/auth/profile", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res.data);
      setSuccessMsg("Profile updated successfully!");
      localStorage.setItem("waiterProfile", JSON.stringify(formData)); // update local copy
    } catch (err) {
      console.error("Error updating profile:", err.message);
      alert("Error updating profile");
    }
  };
  return (
    <div className={styles.formContainer}>
      <h2 className="mb-4">Profile Update</h2>

      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <Form.Group className="mb-4">
          <Form.Label>Upload Profile Image</Form.Label>
          <Form.Control
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className={styles.inputField}
          />
        </Form.Group>

        {/* Full Name */}
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.inputField}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.inputField}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Date of Birth + Gender + Marital Status */}
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Address Details */}
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>State of Origin</Form.Label>
              <Form.Control
                type="text"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>LGA</Form.Label>
              <Form.Control
                type="text"
                name="lga"
                value={formData.lga}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mt-3">
          <Form.Label>Residential Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={styles.inputField}
          />
        </Form.Group>

        {/* Phone + Email */}
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.inputField}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Next of Kin */}
        <div className="mt-4">
          <h5>Next of Kin</h5>
          <Row>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="nextOfKin.name"
                value={formData.nextOfKin.name}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Relationship"
                name="nextOfKin.relationship"
                value={formData.nextOfKin.relationship}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="nextOfKin.phone"
                value={formData.nextOfKin.phone}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
          </Row>
        </div>

        {/* Crime & Substance Questions */}
        <div className="mt-4">
          <Form.Group>
            <Form.Label>Have you ever been convicted of a crime?</Form.Label>
            <Form.Select
              name="convicted"
              value={formData.convicted}
              onChange={handleChange}
              className={styles.inputField}
            >
              <option value="">Select...</option>
              <option>Yes</option>
              <option>No</option>
            </Form.Select>
          </Form.Group>
          {formData.convicted === "Yes" && (
            <Form.Control
              as="textarea"
              placeholder="Explain..."
              name="convictionDetails"
              value={formData.convictionDetails}
              onChange={handleChange}
              className={`${styles.inputField} mt-2`}
            />
          )}

          <Form.Group className="mt-3">
            <Form.Label>Do you currently use or abuse any substance?</Form.Label>
            <Form.Select
              name="substanceUse"
              value={formData.substanceUse}
              onChange={handleChange}
              className={styles.inputField}
            >
              <option value="">Select...</option>
              <option>Yes</option>
              <option>No</option>
            </Form.Select>
          </Form.Group>
        </div>

        {/* Education & Experience */}
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Highest Education</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Worked as Waiter Before?</Form.Label>
              <Form.Select
                name="waiterExp"
                value={formData.waiterExp}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        {formData.waiterExp === "Yes" && (
          <Form.Control
            as="textarea"
            placeholder="How long and where?"
            name="waiterExpDetails"
            value={formData.waiterExpDetails}
            onChange={handleChange}
            className={`${styles.inputField} mt-2`}
          />
        )}

        {/* Other Yes/No Questions */}
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Hospitality Training/Certification</Form.Label>
              <Form.Select
                name="training"
                value={formData.training}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Willing to work evenings/weekends?</Form.Label>
              <Form.Select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Work under pressure?</Form.Label>
              <Form.Select
                name="underPressure"
                value={formData.underPressure}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Guarantor */}
        <div className="mt-4">
          <h5>Guarantor</h5>
          <Row>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="guarantor.name"
                value={formData.guarantor.name}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Relationship"
                name="guarantor.relationship"
                value={formData.guarantor.relationship}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Address"
                name="guarantor.address"
                value={formData.guarantor.address}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="guarantor.phone"
                value={formData.guarantor.phone}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <Form.Control
                type="email"
                placeholder="Email"
                name="guarantor.email"
                value={formData.guarantor.email}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Occupation/Workplace"
                name="guarantor.occupation"
                value={formData.guarantor.occupation}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Col>
          </Row>
        </div>

        <Button type="submit" className={`${styles.gradientBtn} rounded-0 mb-4 mt-4 fw-light`}>
  Save Profile
</Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
