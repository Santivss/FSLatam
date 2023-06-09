import "./Registered.css";
import { useIconsStore } from "../../../../store/ui_icons_store";

const Registered = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div>
      <div className="registered__container">
        <img src={ui_icons.bookmark_icon} alt="" className="bookmark_icon" />
        <img
          src={ui_icons.notification_icon}
          alt=""
          className="notification_icon"
        />
        <img src={ui_icons.upload_icon} alt="" className="upload_icon" />
        <img src={ui_icons.account_icon} alt="" className="account_icon" />
      </div>
    </div>
  );
};

export default Registered;
