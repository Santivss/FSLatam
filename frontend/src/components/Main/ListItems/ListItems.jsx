import "./ListItems.css";
import { useIconsStore } from "../../../store/ui_icons_store";
import ExpandedContent from "./ExpandedContent/ExpandedContent";
import ToggleComponent from "../../../utils/ToggleComponent";
import { firstRequestData } from "../../../store/firstRequestInformation";
import { motion } from "framer-motion";

const ListItems = () => {
  const { ui_icons } = useIconsStore();
  const { dataMods } = firstRequestData();

  const handleAddIconClick = (event) => {
    event.stopPropagation();
    // Lógica o acciones que deseas ejecutar al hacer clic en la imagen add_icon
    console.log("Imagen add_icon fue clickeada");
  };

  return (
    <ToggleComponent
      children={<ExpandedContent />}
      buttonText={
        <div className="listItems">
          {dataMods?.allMods.map((item) => {
            console.log(item);
            return (
              <div key={item.mod_id} className="list__container">
                <div className="mod__icon-container">
                  <img src="test" alt="" className="mod__icon" />
                </div>

                <div className="top__options-container">
                  <img
                    src={ui_icons.pc_icon_amarillo}
                    alt=""
                    className="pc__icon"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.05 }}
                    className="add_icon-button__container"
                  >
                    <img
                      src={ui_icons.add_icon}
                      alt=""
                      className="add_icon"
                      onClick={handleAddIconClick}
                    />
                  </motion.div>

                  <img
                    src={ui_icons.console_icon_amarillo}
                    alt=""
                    className="console__icon"
                  />
                </div>

                <div className="bottom__stats-container">
                  <h2 className="mod__title">{item.mod_title}</h2>
                  <div className="bottom__info-container">
                    <div className="individual__info-container">
                      <img
                        src={ui_icons.date_icon_amarillo}
                        alt=""
                        className="info__icon"
                      />
                      <span className="infoTest">17/03/23</span>
                    </div>

                    {/* Line */}
                    <span className="infoLine"></span>
                    {/* Line */}

                    <div className="individual__info-container">
                      <img
                        src={ui_icons.version_icon_amarillo}
                        alt=""
                        className="info__icon"
                      />
                      <span className="infoTest">0.0.9</span>
                    </div>

                    {/* Line */}
                    <span className="infoLine"></span>
                    {/* Line */}

                    <div className="individual__info-container">
                      <img
                        src={ui_icons.star_icon_amarillo}
                        alt=""
                        className="info__icon"
                      />
                      <span className="infoTest">4.6</span>
                    </div>

                    {/* Line */}
                    <span className="infoLine"></span>
                    {/* Line */}

                    <div className="individual__info-container">
                      <img
                        src={ui_icons.download_icon_amarillo}
                        alt=""
                        className="info__icon"
                      />
                      <span className="infoTest">9.459</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default ListItems;
