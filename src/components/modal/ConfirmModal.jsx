import React from "react";
import ReactDOM from "react-dom";

export default function ConfirmModal({ open, message, onConfirm, onCancel }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <p>{message}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button className="btn primary" onClick={onConfirm}>Yes</button>
          <button className="btn" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>,
    document.body
  );
}