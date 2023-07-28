import "./ExpandableOptions.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import OptionReusable from "./OptionReusable/OptionReusable";
import { useEffect, useRef } from "react";
import ToggleComponent from "../../../../../utils/ToggleComponent";
import AccountComponent from "./AccountComponent/AccountComponent";

const ExpandableOptions = ({
  visibilityComponent,
  handleDeleteToken,
  iconRef,
  setVisibilityComponent,
}) => {
  const { ui_icons } = useIconsStore();
  const accountContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar si el clic se realizó fuera de ambas referencias
      if (
        iconRef.current &&
        accountContainerRef.current &&
        !iconRef.current.contains(event.target) &&
        !accountContainerRef.current.contains(event.target)
      ) {
        setVisibilityComponent(false); // Cambiar al valor opuesto
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setVisibilityComponent, iconRef]);

  return (
    <div
      className={`account__sections-container ${
        visibilityComponent ? "options__active" : ""
      }`}
      ref={accountContainerRef}
    >
      <ToggleComponent
        children={<AccountComponent />}
        buttonText={
          <OptionReusable
            title="Account"
            action={null}
            icon={ui_icons.account_settings_icon}
          />
        }
      ></ToggleComponent>
      <OptionReusable
        title="Logout"
        action={handleDeleteToken}
        icon={ui_icons.logout_icon_amarillo}
      />
    </div>
  );
};

export default ExpandableOptions;