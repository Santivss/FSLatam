import "./MenuCenterMobile.css";
import account_settings_icon from "../../assets/uiIcons/account_settings_icon.svg";
import lupa_icon_amarillo from "../../assets/uiIcons/lupa_icon_amarillo.svg";
import fslatam_icon from "../../assets/uiIcons/fslatam_icon.svg";
import burger_icon_amarilo from "../../assets/uiIcons/burger_icon_amarilo.svg";
import upload_icon_amarillo from "../../assets/uiIcons/upload_icon_amarillo.svg";
import { menuContainersStore } from "../../store/menuContainersStore";
import { motion } from "framer-motion";

const MenuCenterMobile = () => {
  const { navContainerStatus, setNavContainerStatus } = menuContainersStore();

  return (
    <div className="homeMenu__container">
      <img
        src={burger_icon_amarilo}
        alt="burger_icon_amarilo"
        className="homeMenuIcon"
        onClick={() => setNavContainerStatus(!navContainerStatus)}
      />
      <img
        src={lupa_icon_amarillo}
        alt="lupa_icon_amarillo"
        className="homeMenuIcon"
      />
      <img
        src={fslatam_icon}
        alt="fslatam_icon"
        className="homeMenu__fslatamIcon"
      />
      <img
        src={upload_icon_amarillo}
        alt="upload_icon_amarillo"
        className="homeMenuIcon"
      />
      <img
        src={account_settings_icon}
        alt="account_settings_icon"
        className="homeMenuIcon"
      />
    </div>
  );
};

export default MenuCenterMobile;
