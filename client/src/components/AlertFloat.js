import React, { useState } from "react";
import { connect } from "react-redux";

// checks if alerts is not empty and not null, then for each alert in alerts array, displays it

const Alert = ({ alerts }) => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type} ${isClosed ? "d-none" : ""}`}
        style={{
          padding: "0.5rem",
          paddingRight: "1.5rem",
          position: "fixed",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "95vw",
          textAlign: "center",
          margin: "0",
          zIndex: "2000",
          opacity: "0.9",
        }}
      >
        {alert.message}
        <i
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          className="fas fa-times"
          onClick={() => setIsClosed(true)}
        ></i>
      </div>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
  };
};
export default connect(mapStateToProps)(Alert);
