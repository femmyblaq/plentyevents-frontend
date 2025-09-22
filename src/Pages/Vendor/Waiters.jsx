import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Waiters = () => {
  const [waiters, setWaiters] = useState([]);
  const [selectedWaiter, setSelectedWaiter] = useState(null);

  // Dummy waiters (fallback until your API is ready)
  const dummyWaiters = [
    {
      id: 1,
      fullName: "John Doe",
      location: "Lagos",
      years: 2,
      skill: "Service",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      location: "Abuja",
      years: 3,
      skill: "Bar",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      fullName: "Michael Johnson",
      location: "Enugu",
      years: 5,
      skill: "Service",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 4,
      fullName: "Sarah Williams",
      location: "Kano",
      years: 4,
      skill: "Bar",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  useEffect(() => {
    // Replace with your actual API endpoint later
    axios
      .get("https://your-api.com/waiters")
      .then((response) => {
        setWaiters(response.data);
      })
      .catch(() => {
        // If API is not ready, use dummy waiters
        setWaiters(dummyWaiters);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white p-4 rounded-4 shadow-lg">
        <h3 className="fw-bold">Waiters</h3>
        <div className="row">
          {/* Waiter List */}
          <div
            className="col-md-6 border-end"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <ul className="list-group list-group-flush">
              {dummyWaiters.map((waiter) => (
                <li
                  key={waiter.id}
                  className={`list-group-item bg-dark text-white d-flex align-items-center justify-content-between ${
                    selectedWaiter?.id === waiter.id
                      ? "border border-success"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedWaiter(waiter)}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={waiter.photo || "https://via.placeholder.com/40"}
                      alt={waiter.fullName}
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div>
                      <strong>{waiter.fullName}</strong>
                      <div className="text-muted small">
                        {waiter.location} • {waiter.years} yrs
                      </div>
                    </div>
                  </div>
                  <span className="badge bg-secondary">{waiter.skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waiter Details */}
          <div className="col-md-6">
            {selectedWaiter ? (
              <div className="card bg-black text-white p-4 rounded-4">
                <img
                  src={selectedWaiter.photo || "https://via.placeholder.com/100"}
                  alt={selectedWaiter.fullName}
                  className="rounded mb-3"
                  width="100%"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
                <h4>{selectedWaiter.fullName}</h4>
                <p className="mb-1">
                  {selectedWaiter.location} • {selectedWaiter.years} yrs
                </p>
                <p>
                  <strong>Skills:</strong> {selectedWaiter.skill}
                </p>
                <div>
                  <button
                    className="btn me-2"
                    style={{
                      backgroundColor: "#93e704",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Pick
                  </button>
                  <button className="btn btn-outline-light">Message</button>
                </div>
              </div>
            ) : (
              <p className="text-muted">Select a waiter to see details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiters;
