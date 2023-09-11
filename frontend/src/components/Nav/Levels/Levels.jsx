import "./Levels.css";
import { userInfoStore } from "../../../store/userInfoStore";
import user_icon from "../../../assets/uiIcons/user_icon.svg";
import loading_icon from "../../../assets/uiIcons/loading_icon.svg";

export const Levels = () => {
  const { userName, userIcon, userRol } = userInfoStore();

  return (
    <div className="levels__container">
      <img src={user_icon} alt="user_icon" className="levels__userIcon" />
      <div className="levels__section">
        <h4>Usuario:</h4>
        <h4>{userName}</h4>
        {/*  <img src={loading_icon} alt="loading_icon" className="hoal" /> */}
      </div>
    </div>
  );
};
