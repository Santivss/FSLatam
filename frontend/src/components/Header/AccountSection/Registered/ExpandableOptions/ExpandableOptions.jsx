import "./ExpandableOptions.css";
import account_settings_icon from "../../../../../assets/uiIcons/account_settings_icon.svg";
import logout_icon_amarillo from "../../../../../assets/uiIcons/logout_icon_amarillo.svg";
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
            icon={account_settings_icon}
          />
        }
      ></ToggleComponent>
      <OptionReusable
        title="Logout"
        action={handleDeleteToken}
        icon={logout_icon_amarillo}
      />
    </div>
  );
};

export default ExpandableOptions;
