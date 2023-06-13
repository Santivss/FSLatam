import "./Account.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
const Account = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div>
      <img src={ui_icons.account_icon} alt="" className="account_icon" />
    </div>
  );
};

export default Account;
