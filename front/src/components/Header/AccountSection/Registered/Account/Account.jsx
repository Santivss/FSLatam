import { useState } from "react";
import "./Account.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";

const Account = () => {
  const { ui_icons } = useIconsStore();

  const [sectionsVisible, setSectionsVisible] = useState(false);

  const toggleSections = () => {
    setSectionsVisible(!sectionsVisible);
  };

  return (
    <div className="account__container">
      <img
        src={ui_icons.add_icon}
        alt=""
        className="account_icon"
        onClick={toggleSections}
      />
      <div
        className={`account__sections-container ${
          sectionsVisible ? "visible" : ""
        }`}
      >
        <div className="section">
          <span className="spantest">Option1</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
