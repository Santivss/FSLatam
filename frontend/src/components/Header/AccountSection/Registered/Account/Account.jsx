import { useRef, useState } from "react";
import "./Account.css";
import ExpandableOptions from "../ExpandableOptions/ExpandableOptions";
import user_icon from "../../../../../assets/uiIcons/user_icon.svg";

const Account = () => {
  const [visibilityComponent, setVisibilityComponent] = useState(false);
  const iconRef = useRef(null);

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
        src={user_icon}
        alt="user_icon"
        className="account_icon"
        onClick={showComponent}
        ref={iconRef}
      />
      <ExpandableOptions
        visibilityComponent={visibilityComponent}
        setVisibilityComponent={setVisibilityComponent}
        handleDeleteToken={handleDeleteToken}
        iconRef={iconRef}
      />
    </div>
  );
};

export default Account;
