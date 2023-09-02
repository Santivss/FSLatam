import "./Notification.css";
import notification_icon_amarillo from "../../../../../assets/uiIcons/notification_icon_amarillo.svg";
import notification_icon from "../../../../../assets/uiIcons/notification_icon.svg";
import { useState, useRef, useEffect } from "react";

const Notification = () => {
  const [notificationsContainerStatus, setNotificationsContainerStatus] =
    useState(false);
  const iconRef = useRef(null);
  const notificationsContainerRef = useRef(null);
  const [notificationIconActive, setNotificationIconActive] = useState(true);

  const handleContainerVisibility = () => {
    setNotificationsContainerStatus(!notificationsContainerStatus);
    setTimeout(() => {
      setNotificationIconActive(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsContainerRef.current &&
        iconRef.current &&
        !notificationsContainerRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        setNotificationsContainerStatus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="notifications__container">
      <img
        src={
          notificationIconActive
            ? notification_icon_amarillo
            : notification_icon
        }
        alt=""
        className={`notification_icon ${
          notificationIconActive ? "notification_icon-active" : ""
        }`}
        onClick={handleContainerVisibility}
        ref={iconRef}
      />
      {notificationsContainerStatus ? (
        <div
          className={`notificationsItems__container ${
            notificationsContainerStatus ? "notificationsContainer__active" : ""
          }`}
          ref={notificationsContainerRef}
        >
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
          <span>Option</span>
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
