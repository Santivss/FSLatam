import "./Notification.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
const Notification = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div>
      <img
        src={ui_icons.notification_icon}
        alt=""
        className="notification_icon"
      />
    </div>
  );
};

export default Notification;
