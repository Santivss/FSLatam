import "./ExpandableOptions.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import OptionReusable from "./OptionReusable/OptionReusable";

const ExpandableOptions = ({
  visibilityComponent,
  handleDeleteToken,
  showComponent,
}) => {
  const { ui_icons } = useIconsStore();

  return (
    <div
      className={`account__sections-container ${
        visibilityComponent ? "options__active" : ""
      }`}
    >
      <OptionReusable
        title="Account"
        action={null}
        icon={ui_icons.account_settings_icon}
      />
      <OptionReusable
        title="My Mods"
        action={handleDeleteToken}
        icon={ui_icons.mods_icon}
      />
      <OptionReusable
        title="Logout"
        action={handleDeleteToken}
        icon={ui_icons.logout_icon_amarillo}
      />
      <button className="button__toggle-component" onClick={showComponent}>
        <img
          src={ui_icons.close_icon}
          alt=""
          className="button__toggle-component"
        />
      </button>
    </div>
  );
};

export default ExpandableOptions;
