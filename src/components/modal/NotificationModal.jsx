import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function NotificationModal({ open, message, duration = 2000, type = "success", onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!open) return;
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(100 - (elapsed / duration) * 100, 0);
      setProgress(percent);
      if (elapsed >= duration) {
        clearInterval(interval);
        onClose && onClose();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [open, duration, onClose]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="modal-backdrop" style={{ zIndex: 9999 }}>
      <div className="modal" style={{ minWidth: 280 }}>
        <p style={{ color: type === "error" ? "#d32f2f" : "#333" }}>{message}</p>
        <div style={{ height: 6, background: "#eee", borderRadius: 3, marginTop: 12 }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: type === "error" ? "#d32f2f" : "#4caf50",
              borderRadius: 3,
              transition: "width 0.1s linear"
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}