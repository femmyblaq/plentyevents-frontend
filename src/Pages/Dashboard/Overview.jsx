
import "../VendorDashboard.css";
const Overview = ({ savedPicks, bookings, openPickDetail }) => (
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

export default Overview;