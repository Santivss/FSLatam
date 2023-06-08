import {
  add_icon_blanco,
  date_icon,
  download_icon,
  pc_icon,
  star_icon_stroke,
  version_icon,
  console_icon,
} from "../../../assets/uiIcons";
import "./ListItems.css";

const ListItems = ({ image }) => {
  return (
    <div className="list__container">
      <div className="mod__icon-container">
        <img src={image} alt="" className="mod__icon" />
      </div>
      <div className="top__options-container">
        <img src={pc_icon} alt="" className="pc__icon" />
        <img src={add_icon_blanco} alt="" className="add_icon" />
        <img src={console_icon} alt="" className="console__icon" />
      </div>
      <div className="bottom__stats-container">
        <h2 className="mod__title">Juan Bautista Alberdi (Argentina)</h2>
        <div className="bottom__info-container">
          <div className="individual__info-container">
            <img src={date_icon} alt="" className="info__icon" />
            <span className="infoTest">23/03/23</span>
          </div>

          {/* Line */}
          <span className="infoLine"></span>
          {/* Line */}

          <div className="individual__info-container">
            <img src={version_icon} alt="" className="info__icon" />
            <span className="infoTest">1.0.1</span>
          </div>

          {/* Line */}
          <span className="infoLine"></span>
          {/* Line */}

          <div className="individual__info-container">
            <img src={download_icon} alt="" className="info__icon" />
            <span className="infoTest">5.689</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
