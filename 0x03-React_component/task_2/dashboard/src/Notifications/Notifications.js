import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been markes as read`);
  }
  render() {
    return (
      <>
        {this.props.displayDrawer ? (
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
              {this.props.listNotifications.length > 0
                ? this.props.listNotifications.map((notificationItem) => (
                    <NotificationItem
                      key={notificationItem.id}
                      type={notificationItem.type}
                      value={notificationItem.value}
                      html={notificationItem.html}
                      // id={notificationItem.id}
                      // markAsRead={this.markAsRead}
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
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
