import "./Notification.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import { useState, useRef, useEffect } from "react";

const Notification = () => {
  const { ui_icons } = useIconsStore();
  const [notificationsContainerStatus, setNotificationsContainerStatus] =
    useState(false);
  const iconRef = useRef(null);
  const notificationsContainerRef = useRef(null);

  const handleContainerVisibility = () => {
    setNotificationsContainerStatus(!notificationsContainerStatus);
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
        src={ui_icons.notification_icon}
        alt=""
        className="notification_icon"
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
