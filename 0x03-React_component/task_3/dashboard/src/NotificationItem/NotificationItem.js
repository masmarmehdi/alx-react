import React from "react";
import "../Notifications/Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  render() {
    const {type, value, html, markAsRead, id} = this.props;
    return (
      <>
        {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
        {html ? (
          <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
      </>
    );
  }
}
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("");
  },
  id: 0
};

export default NotificationItem;
