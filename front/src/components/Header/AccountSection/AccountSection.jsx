import "./AccountSection.css";
import bookmark_icon from "../../../assets/uiIcons/bookmark_icon.svg";
import notification_icon from "../../../assets/uiIcons/notification_icon.svg";
import upload_icon from "../../../assets/uiIcons/upload_icon.svg";
import account_icon from "../../../assets/uiIcons/account_icon.svg";

const AccountSection = () => {
  return (
    <div className="account">
      <div className="account__container">
        <img src={bookmark_icon} alt="" className="bookmark_icon" />
        <img src={notification_icon} alt="" className="notification_icon" />
        <img src={upload_icon} alt="" className="upload_icon" />
        <img src={account_icon} alt="" className="account_icon" />
      </div>
    </div>
  );
};

export default AccountSection;
