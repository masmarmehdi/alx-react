import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";

const Notifications = ({ displayDrawer = true, listNotifications = [] }) => {
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
            {listNotifications.length > 0
              ? listNotifications.map((notificationItem) => (
                  <NotificationItem
                    key={notificationItem.id}
                    type={notificationItem.type}
                    value={notificationItem.value}
                    html={notificationItem.html}
                  />
                ))
              : "No new notification for now"}
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
