import "./Registered.css";
import UploadMod from "./UploadMod/UploadMod";
import Notification from "./Notification/Notification";
import Bookmark from "./Bookmark/Bookmark";
import Account from "./Account/Account";

const Registered = () => {
  return (
    <div className="registered__container">
      <Bookmark />
      <Notification />
      <UploadMod />
      <Account />
    </div>
  );
};

export default Registered;
