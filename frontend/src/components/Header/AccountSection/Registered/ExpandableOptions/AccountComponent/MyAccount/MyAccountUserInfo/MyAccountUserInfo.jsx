import "./MyAccountUserInfo.css";
import user_icon from "../../../../../../../../assets/uiIcons/user_icon.svg";
import { userInfoStore } from "../../../../../../../../store/userInfoStore";

const MyAccountUserInfo = () => {
  const { userIcon, countMods, userName } = userInfoStore();
  return (
    <div className="myAccountUserInfo__container">
      {userIcon === "user_icon_default" ? (
        <img src={user_icon} alt="" className="myAccountUser__image" />
      ) : (
        "iconPersonalizado"
      )}

      <span>{userName}</span>
      <div className="myAccountStats__container">
        <span>Seguidores</span>
        <span>Mods: {countMods}</span>
        <span>Descargas Totales</span>
        <span>Descargas hoy</span>
      </div>
    </div>
  );
};

export default MyAccountUserInfo;
