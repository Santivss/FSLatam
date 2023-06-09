import "./ListItems.css";

import { useIconsStore } from "../../../store/ui_icons_store";

import ExpandedContent from "./ExpandedContent/ExpandedContent";
import ToggleComponent from "../../../utils/ToggleComponent";

const ListItems = ({ image }) => {
  const { ui_icons } = useIconsStore();

  const handleAddIconClick = (event) => {
    event.stopPropagation();
    // Lógica o acciones que deseas ejecutar al hacer clic en la imagen add_icon
    console.log("Imagen add_icon fue clickeada");
  };

  return (
    <ToggleComponent
      children={<ExpandedContent />}
      buttonText={
        <div className="list__container">
          <div className="mod__icon-container">
            <img src={image} alt="" className="mod__icon" />
          </div>

          <div className="top__options-container">
            <img src={ui_icons.pc_icon} alt="" className="pc__icon" />
            <img
              src={ui_icons.add_icon}
              alt=""
              className="add_icon"
              onClick={handleAddIconClick}
            />
            <img src={ui_icons.console_icon} alt="" className="console__icon" />
          </div>

          <div className="bottom__stats-container">
            <h2 className="mod__title">Juan Bautista Alberdi (Argentina)</h2>
            <div className="bottom__info-container">
              <div className="individual__info-container">
                <img src={ui_icons.date_icon} alt="" className="info__icon" />
                <span className="infoTest">23/03/23</span>
              </div>

              {/* Line */}
              <span className="infoLine"></span>
              {/* Line */}

              <div className="individual__info-container">
                <img
                  src={ui_icons.version_icon}
                  alt=""
                  className="info__icon"
                />
                <span className="infoTest">1.0.1</span>
              </div>

              {/* Line */}
              <span className="infoLine"></span>
              {/* Line */}

              <div className="individual__info-container">
                <img
                  src={ui_icons.download_icon}
                  alt=""
                  className="info__icon"
                />
                <span className="infoTest">5.689</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ListItems;
