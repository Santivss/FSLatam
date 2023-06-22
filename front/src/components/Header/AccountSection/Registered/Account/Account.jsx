import { useState } from "react";
import "./Account.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import ExpandableOptions from "../ExpandableOptions/ExpandableOptions";

const Account = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="account__container">
      <img src={ui_icons.user_icon} alt="" className="account_icon" />
      <ExpandableOptions title="Logout" />
    </div>
  );
};

export default Account;
