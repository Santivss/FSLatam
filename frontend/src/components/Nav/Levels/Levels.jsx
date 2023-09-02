import "./Levels.css";
import { userInfoStore } from "../../../store/userInfoStore";

export const Levels = () => {
  const { userName } = userInfoStore();

  return (
    <div className="levels__container">
      <h1 className="title">
        <a href="/home">
          <span className="title__fc">FC</span>
          <span className="title__mods">Mods</span>
        </a>
      </h1>
      <div className="levels__section">
        <h4>Usuario:</h4>
        <h4>{userName}</h4>
      </div>
    </div>
  );
};
