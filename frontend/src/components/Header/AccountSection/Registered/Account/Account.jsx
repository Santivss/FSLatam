import { useState } from "react";
import "./Account.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import ExpandableOptions from "../ExpandableOptions/ExpandableOptions";

const Account = () => {
  const { ui_icons } = useIconsStore();
  const [visibilityComponent, setVisibilityComponent] = useState(false);

  const showComponent = () => {
    setVisibilityComponent(!visibilityComponent);
  };

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="account__container">
      <img
        src={ui_icons.user_icon}
        alt=""
        className="account_icon"
        onClick={showComponent}
      />
      <ExpandableOptions
        visibilityComponent={visibilityComponent}
        handleDeleteToken={handleDeleteToken}
        showComponent={showComponent}
      />
    </div>
  );
};

export default Account;
