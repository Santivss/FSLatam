import { add_icon_blanco, star_icon_stroke } from "../../../assets/uiIcons";
import "./ListItems.css";

const ListItems = ({ image }) => {
  return (
    <div className="list__container">
      <div className="mod__icon-container">
        <img src={image} alt="" className="mod__icon" />
      </div>
      {/* <div className="top__options-container">
        <img src={add_icon_blanco} alt="" className="addMod__icon" />
        <div className="starMod__container">
          <img src={star_icon_stroke} alt="" className="starMod__icon" />
        </div>
      </div> */}
      <div className="bottom__stats-container">
        <h2 className="mod__title">Jhon Deere 4420</h2>
        <div className="bottom__info-container">
          <span className="infoTest">23 Marzo</span>
          <span className="infoLine"></span>
          <span className="infoTest">
            Version <span>1.0.1</span>
          </span>
          <span className="infoLine"></span>
          <span className="infoTest">Downloads: 5.364</span>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
