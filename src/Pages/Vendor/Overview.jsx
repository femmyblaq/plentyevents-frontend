import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Overview.module.css";
import { getWaiters } from "../../api/getWaiters";
import api from "../../api/axios";
const Overview = () => {
  const [data, setData] = useState({
    availableWaiters: 0,
    activeBookings: 0,
    savedPicks: 0,
  });
  const [loading, setLoading] = useState(true);


  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const fetchWaiters = async () => {
    try {
      const response = await getWaiters({ status: "available" });
      setData((prev) => ({
        ...prev,
        availableWaiters: response.length,
      }));
    } catch (error) {
      console.error("Error fetching waiters:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // no token = not logged in
      window.location.href = "/login";
      return;
    }

    const fetchOverview = async () => {
      try {
        // validate token with backend
        const res = await api.get("/auth/profile");
        if (!res.data) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }

        // fetch overview data
        const overviewRes = await api.get("/waiters"); 
        setData(overviewRes.data);

        // fetch available waiters separately
        fetchWaiters();
      } catch (err) {
        console.error("Session expired or fetch failed:", err);
        localStorage.removeItem("token");
        window.location.href = "/login"; // redirect to login if invalid session
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${style.overview} container mt-4`}>
      <div className="card bg-dark text-white p-4 rounded-4 shadow-lg">
        <h3 className="fw-bold">Overview</h3>
        <p className="text-muted">
          Quick snapshot of your activity, recent picks and quick actions.
        </p>

        <div className="row text-center">
          {/* Available Waiters */}
          <div className="col-md-4 mb-3">
            <div className="card bg-black text-white p-4 rounded-4">
              <h2 className="text-danger fw-bold">{data.availableWaiters}</h2>
              <p className="text-white">Available Waiters</p>
            </div>
          </div>

          {/* Active Bookings */}
          <div className="col-md-4 mb-3">
            <div className="card bg-black text-white p-4 rounded-4">
              <h2 className="text-danger fw-bold">{data.activeBookings}</h2>
              <p className="text-white">Active Bookings</p>
            </div>
          </div>

          {/* Saved Picks */}
          <div className="col-md-4 mb-3">
            <div className="card bg-black text-white p-4 rounded-4">
              <h2 className="text-danger fw-bold">{data.savedPicks}</h2>
              <p className="text-white">Saved Picks</p>
            </div>
          </div>
        </div>

        {/* Recent Saved Picks */}
        <div className="mt-4">
          <h4 className="fw-bold">Recent Saved Picks</h4>
          {data.savedPicks === 0 ? (
            <p className="text-white">
              No saved picks yet — browse waiters and click “Pick”.
            </p>
          ) : (
            <ul>
              {/* If API provides recent picks, map them here */}
              {/* data.recentPicks.map((pick) => (
                <li key={pick.id}>{pick.name}</li>
              )) */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
