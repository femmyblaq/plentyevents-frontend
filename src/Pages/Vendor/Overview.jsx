import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Overview.module.css";
import { getWaiters } from "../../api/getWaiters";

const Overview = () => {
  const [data, setData] = useState({
    availableWaiters: 0,
    activeBookings: 0,
    savedPicks: 0,
  });

  const fetchWaiters = async () => {
    try {
      const response = await getWaiters({ status: "available" });
      console.log("Fetched waiters:", response);
      // setData((prevData) => ({
      //   ...prevData,
      //   availableWaiters: response.length,
      // }));
    } catch (error) {
      console.error("Error fetching waiters:", error);
    }
  }
  useEffect(() => {
    fetchWaiters();
    // Replace with your actual API endpoint
    axios
      .get("https://your-api.com/overview")
      .then((response) => {
        // Assuming API returns { availableWaiters: 34, activeBookings: 2, savedPicks: 0 }
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching overview:", error);
      });
  }, []);

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
              {/* Example: Map through recent picks if your API provides them */}
              {/* response.data.recentPicks.map(pick => <li key={pick.id}>{pick.name}</li>) */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
  