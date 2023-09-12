import "./MenuCenterMobile.css";
import categories_icon from "../../assets/uiIcons/categories_icon.svg";
import upload_icon_amarillo from "../../assets/uiIcons/upload_icon_amarillo.svg";
import user_icon from "../../assets/uiIcons/user_icon.svg";
import notification_icon_amarillo from "../../assets/uiIcons/notification_icon_amarillo.svg";

const MenuCenterMobile = () => {
  return (
    <div className="homeMenu__container">
      <img
        src={upload_icon_amarillo}
        alt="upload_icon_amarillo"
        className="header__categoriesBtnIcon"
      />
      <img
        src={categories_icon}
        alt="categories_icon.svg"
        className="header__categoriesBtnIcon"
      />

      <img
        src={user_icon}
        alt="user_icon"
        className="header__categoriesBtnIcon"
      />
      <img
        src={notification_icon_amarillo}
        alt="notification_icon_amarillo"
        className="header__categoriesBtnIcon"
      />
    </div>
  );
};

export default MenuCenterMobile;
