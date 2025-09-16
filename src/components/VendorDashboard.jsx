import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VendorDashboard.css";

const DashboardHome = ({ savedPicks, bookings, openPickDetail }) => (
  <div className="page-panel" data-aos="fade-up">
    <h2>Overview</h2>
    <p>Quick snapshot of your activity, recent picks and quick actions.</p>

    <div className="overview-cards">
      <div className="card">
        <strong>34</strong>
        <span>Available Waiters</span>
      </div>

      <div className="card">
        <strong>{bookings.length}</strong>
        <span>Active Bookings</span>
      </div>

      <div
        className={`card clickable ${savedPicks.length === 0 ? "empty" : ""}`}
        onClick={() => savedPicks.length && openPickDetail(savedPicks[0])}
        title={savedPicks.length ? "Open latest saved pick" : "No saved picks yet"}
      >
        <strong>{savedPicks.length}</strong>
        <span>Saved Picks</span>
      </div>
    </div>

    <div style={{ marginTop: 18 }}>
      <h3>Recent Saved Picks</h3>

      {savedPicks.length === 0 ? (
        <p className="muted">No saved picks yet — browse waiters and click “Pick”.</p>
      ) : (
        <div className="saved-preview">
          {savedPicks.slice(0, 6).map((p) => (
            <button
              key={p.id}
              className="saved-item"
              onClick={() => openPickDetail(p)}
              title={`Open ${p.name}`}
            >
              <div className="saved-avatar">
                {p.picture ? <img src={p.picture} alt={p.name} /> : p.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div className="saved-meta">
                <strong>{p.name}</strong>
                <div className="muted">{p.location} • {p.exp}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

const WaitersList = ({ waiters, selected, setSelected }) => {
  return (
    <div className="waiters-list">
      {waiters.map((w) => (
        <button
          key={w.id}
          className={`waiter-row ${selected?.id === w.id ? "active" : ""}`}
          onClick={() => setSelected(w)}
        >
          <div className="row-left">
            <div className="avatar">
              {w.picture ? <img src={w.picture} alt={w.name} /> : w.name[0]}
            </div>
            <div>
              <strong>{w.name}</strong>
              <div className="muted">{w.location} • {w.exp}</div>
            </div>
          </div>
          <div className="row-right">
            <span className="skill">{w.skills}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

const Bookings = ({ bookings, updateBookingStatus }) => (
  <div className="page-panel" data-aos="fade-up">
    <h2>Bookings</h2>
    <p>Manage your bookings here.</p>

    <table className="bookings-table">
      <thead>
        <tr><th>Ref</th><th>Date</th><th>Location</th><th>Status</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <tr key={b.id}>
            <td>{b.ref}</td>
            <td>{b.date}</td>
            <td>{b.location}</td>
            <td>{b.status}</td>
            <td>
              <button className="btn ghost" onClick={() => updateBookingStatus(b.id, "Confirmed")}>Confirm</button>
              <button className="btn" onClick={() => updateBookingStatus(b.id, "Cancelled")}>Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Profile = ({ profile, saveProfile }) => {
  const [form, setForm] = useState(profile || { name: "", brand: "", phone: "", email: "", picture: null });

  useEffect(() => setForm(profile || { name: "", brand: "", phone: "", email: "", picture: null }), [profile]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setForm(prev => ({ ...prev, picture: reader.result }));
    reader.readAsDataURL(f);
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveProfile(form);
    alert("Profile saved");
  };

  return (
    <div className="page-panel" data-aos="fade-up">
      <h2>Profile</h2>
      <p>Vendor profile — contact details, company info and settings.</p>

      <form className="profile-form" onSubmit={handleSave}>
        <div className="profile-left">
          {form.picture ? (
            <img src={form.picture} alt="Profile" className="profile-pic" />
          ) : (
            <div className="profile-pic placeholder">No Image</div>
          )}
          <label className="upload-btn">
            Upload photo
            <input type="file" accept="image/*" onChange={handleFile} />
          </label>
        </div>

        <div className="profile-right">
          <label className="input-label">Vendor Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>

          <label className="input-label">Company / Brand
            <input name="brand" value={form.brand} onChange={handleChange} />
          </label>

          <label className="input-label">Phone
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>

          <label className="input-label">Email
            <input name="email" value={form.email} onChange={handleChange} />
          </label>

          <div style={{ marginTop: 12 }}>
            <button className="btn primary" type="submit">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default function VendorDashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar
  const [active, setActive] = useState("dashboard");
  const [savedPicks, setSavedPicks] = useState(() => {
    try { return JSON.parse(localStorage.getItem("savedPicks") || "[]"); } catch { return []; }
  });
  const [bookings, setBookings] = useState([
    { id: 1, ref: "#A001", date: "2025-09-01", location: "Lagos", status: "Confirmed" },
    { id: 2, ref: "#A002", date: "2025-09-05", location: "Abuja", status: "Pending" },
  ]);

  const [profile, setProfile] = useState(() => {
    try { const p = localStorage.getItem("vendorProfile"); return p ? JSON.parse(p) : { name: "Acme Catering", brand: "Acme", email: "vendor@example.com", phone: "", picture: null }; }
    catch { return { name: "Acme Catering", brand: "Acme", email: "vendor@example.com", phone: "", picture: null }; }
  });

  // Waiter list (mock)
  const [waiters] = useState(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      name: `Waiter ${i + 1}`,
      location: ["Lagos", "Abuja", "Enugu", "Kano"][i % 4],
      exp: `${1 + (i % 5)} yrs`,
      skills: i % 2 === 0 ? "Service" : "Bar",
      picture: `https://i.pravatar.cc/150?img=${10 + i}`
    }))
  );

  const [selectedWaiter, setSelectedWaiter] = useState(null); // currently selected in list
  const [modalPick, setModalPick] = useState(null); // saved pick detail modal
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedPicks", JSON.stringify(savedPicks));
  }, [savedPicks]);

  useEffect(() => {
    localStorage.setItem("vendorProfile", JSON.stringify(profile));
  }, [profile]);

  const openTab = (tab) => {
    setActive(tab);
    if (isMobile) setIsOpen(false);
    setSelectedWaiter(null);
  };

  const addPick = (waiter) => {
    if (!waiter) return;
    if (savedPicks.some(w => w.id === waiter.id)) {
      alert("Already picked");
      return;
    }
    setSavedPicks(s => [waiter, ...s]);
    setModalPick(waiter);
  };

  const removePick = (id) => {
    setSavedPicks(s => s.filter(w => w.id !== id));
    if (modalPick?.id === id) setModalPick(null);
  };

  const openPickDetail = (waiter) => setModalPick(waiter);

  const updateBookingStatus = (id, status) => setBookings(b => b.map(x => x.id === id ? { ...x, status } : x));

  const saveProfile = (data) => setProfile(data);

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  // Close mobile detail panel
  const closeMobileDetail = () => setSelectedWaiter(null);

  return (
    <div className="vendor-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="logo">VendorPanel</div>
          <button className="close-sidebar" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav>
          <ul>
            <li className={active === "dashboard" ? "active" : ""}><button onClick={() => openTab("dashboard")}>Dashboard</button></li>
            <li className={active === "waiters" ? "active" : ""}><button onClick={() => openTab("waiters")}>Waiters</button></li>
            <li className={active === "bookings" ? "active" : ""}><button onClick={() => openTab("bookings")}>Bookings</button></li>
            <li className={active === "profile" ? "active" : ""}><button onClick={() => openTab("profile")}>Profile</button></li>
            <li><button onClick={logout} className="logout-link">Log out</button></li>
          </ul>
        </nav>
      </aside>

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}

      {/* Main area */}
      <div className="main">
        <header className="topbar">
          <div className="left">
            <button className="hamburger" onClick={() => setIsOpen(v => !v)} aria-label="Toggle menu">☰</button>
            <div className="title">
              <h1>Welcome, Vendor</h1>
              <div className="muted">Manage your waiters, bookings and profile</div>
            </div>
          </div>

          <div className="right">
            <button className="btn ghost" onClick={() => navigate("/vendor-register")}>Create listing</button>
          </div>
        </header>

        <main className="content">
          {active === "dashboard" && <DashboardHome savedPicks={savedPicks} bookings={bookings} openPickDetail={openPickDetail} />}

          {active === "waiters" && (
            <div className="page-panel waiters-panel" data-aos="fade-up">
              <h2>Waiters</h2>

              <div className="waiters-grid">
                {/* left: list */}
                <WaitersList waiters={waiters} selected={selectedWaiter} setSelected={setSelectedWaiter} />

                {/* right: desktop detail */}
                {!isMobile && (
                  <div className="waiter-detail">
                    {selectedWaiter ? (
                      <>
                        <div className="detail-header">
                          <img src={selectedWaiter.picture} alt={selectedWaiter.name} className="profile-pic" />
                          <h3>{selectedWaiter.name}</h3>
                          <div className="muted">{selectedWaiter.location} • {selectedWaiter.exp}</div>
                        </div>

                        <p><strong>Skills:</strong> {selectedWaiter.skills}</p>
                        <div className="detail-actions">
                          <button className="btn primary" onClick={() => addPick(selectedWaiter)}>Pick</button>
                          <button className="btn ghost">Message</button>
                        </div>
                      </>
                    ) : (
                      <div className="empty"><p>Select a waiter from the list to view details</p></div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile slide-up panel */}
              {isMobile && selectedWaiter && (
                <div className="mobile-detail" role="dialog" aria-label={`${selectedWaiter.name} detail`}>
                  <button className="mobile-close" onClick={closeMobileDetail} aria-label="Close detail">✕</button>
                  <div className="mobile-detail-body">
                    <img className="profile-pic" src={selectedWaiter.picture} alt={selectedWaiter.name} />
                    <h3>{selectedWaiter.name}</h3>
                    <div className="muted">{selectedWaiter.location} • {selectedWaiter.exp}</div>
                    <p style={{marginTop:12}}><strong>Skills:</strong> {selectedWaiter.skills}</p>
                    <div className="detail-actions" style={{marginTop:12}}>
                      <button className="btn primary" onClick={() => { addPick(selectedWaiter); closeMobileDetail(); }}>Pick</button>
                      <button className="btn ghost" onClick={() => alert("Message action (not implemented)")}>Message</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {active === "bookings" && <Bookings bookings={bookings} updateBookingStatus={updateBookingStatus} />}

          {active === "profile" && <Profile profile={profile} saveProfile={saveProfile} />}
        </main>
      </div>

      {/* saved pick modal (overlay) */}
      {modalPick && (
        <div className="modal-backdrop" onClick={() => setModalPick(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{modalPick.name}</h3>
            {modalPick.picture && <img src={modalPick.picture} alt={modalPick.name} className="profile-pic" style={{width:120,height:120}} />}
            <p><strong>Location:</strong> {modalPick.location}</p>
            <p><strong>Experience:</strong> {modalPick.exp}</p>
            <p><strong>Skills:</strong> {modalPick.skills}</p>

            <div style={{display:"flex", gap:8, marginTop:12}}>
              <button className="btn primary" onClick={() => setModalPick(null)}>Close</button>
              <button className="btn" onClick={() => { removePick(modalPick.id); }}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
