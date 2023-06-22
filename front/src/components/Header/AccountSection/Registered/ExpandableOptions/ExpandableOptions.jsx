import "./ExpandableOptions.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";

const ExpandableOptions = ({ title }) => {
  const { ui_icons } = useIconsStore();

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="account__sections-container">
      <button className="account__options-title" onClick={handleDeleteToken}>
        <img
          src={ui_icons.logout_icon_amarillo}
          alt=""
          className="account__options-icon"
        />
        {title}
      </button>
    </div>
  );
};

export default ExpandableOptions;
