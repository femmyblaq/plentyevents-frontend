import React, { useState, useEffect } from "react";
import { MapPin, Clock, UserPlus } from "lucide-react";
import styles from "./AvailableHires.module.css";

// AvailableHires — Job Listings with API connection, pagination, CSV export

export default function AvailableHires() {
  const [view, setView] = useState("grid"); // 'grid' or 'table'
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Fetch jobs from API
//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         setLoading(true);
//         const res = await fetch("https://api.example.com/jobs"); // Replace with real endpoint
//         const data = await res.json();
//         setJobs(data);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchJobs();
//   }, []);

  function formatDateTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString();
  }

  function formatPay(amount, currency) {
    return `${currency} ${amount.toLocaleString()}`;
  }

  function applyToJob(job) {
    // Replace with real integration (API call/modal/etc.)
    alert(`You applied to ${job.role} at ${job.vendor}`);
  }

  function exportCSV() {
    const headers = ["Vendor", "Business", "Role", "DateTime", "Pay", "Location"];
    const rows = filtered.map((job) => [
      job.vendor,
      job.business,
      job.role,
      formatDateTime(job.datetime),
      formatPay(job.pay, job.currency),
      job.location,
    ]);

    let csvContent = "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "available_hires.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const filtered = jobs.filter(
    (h) =>
      h.vendor?.toLowerCase().includes(query.toLowerCase()) ||
      h.business?.toLowerCase().includes(query.toLowerCase()) ||
      h.role?.toLowerCase().includes(query.toLowerCase()) ||
      h.location?.toLowerCase().includes(query.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Available Hires</h1>
          <p className={styles.subtitle}>Open roles from trusted vendors — apply or accept directly.</p>
        </div>

        <div className={styles.headerControls}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search vendor, role or location"
            className={styles.searchBox}
          />

          <div className={styles.viewToggle}>
            <button
              onClick={() => setView("grid")}
              className={`${styles.toggleBtn} ${view === "grid" ? styles.active : ""}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("table")}
              className={`${styles.toggleBtn} ${view === "table" ? styles.active : ""}`}
            >
              Table
            </button>
          </div>

          <button onClick={exportCSV} className={styles.csvBtn}>
            Export CSV
          </button>
        </div>
      </header>

      {loading ? (
        <div className={styles.loading}>Loading jobs...</div>
      ) : (
        <>
          {/* GRID VIEW */}
          {view === "grid" && (
            <section className={styles.grid}>
              {paginated.map((job) => (
                <article key={job.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3>{job.vendor}</h3>
                    <p>{job.business}</p>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.roleRow}>
                      <UserPlus className={styles.icon} /> {job.role}
                      <span className={styles.pay}>{formatPay(job.pay, job.currency)}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <Clock className={styles.icon} /> {formatDateTime(job.datetime)}
                    </div>
                    <div className={styles.detailRow}>
                      <MapPin className={styles.icon} /> {job.location}
                    </div>
                    <button onClick={() => applyToJob(job)} className={styles.applyBtn}>
                      Apply
                    </button>
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* TABLE VIEW */}
          {view === "table" && (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Vendor & Business</th>
                    <th>Role</th>
                    <th>Date & Time</th>
                    <th>Pay Rate</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <div>{job.vendor}</div>
                        <div className={styles.subText}>{job.business}</div>
                      </td>
                      <td>{job.role}</td>
                      <td>{formatDateTime(job.datetime)}</td>
                      <td>{formatPay(job.pay, job.currency)}</td>
                      <td>{job.location}</td>
                      <td>
                        <button onClick={() => applyToJob(job)} className={styles.acceptBtn}>
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${styles.pageBtn} ${page === currentPage ? styles.activePage : ""}`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className={styles.empty}>No listings match your search.</div>
          )}
        </>
      )}
    </div>
  );
}
