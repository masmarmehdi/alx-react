import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "../NotificationItem/NotificationItem";

const Notifications = ({ displayDrawer = true }) => {
  return (
    <>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "2px",
              top: "2px",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="default" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </>
  );
};

export default Notifications;
