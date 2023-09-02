import "./ListItems.css";
import pc_icon_amarillo from "../../../assets/uiIcons/pc_icon_amarillo.svg";
import add_icon from "../../../assets/uiIcons/add_icon.svg";
import console_icon_amarillo from "../../../assets/uiIcons/console_icon_amarillo.svg";
import console_icon from "../../../assets/uiIcons/console_icon.svg";
import date_icon_amarillo from "../../../assets/uiIcons/date_icon_amarillo.svg";
import version_icon_amarillo from "../../../assets/uiIcons/version_icon_amarillo.svg";
import star_icon_amarillo from "../../../assets/uiIcons/star_icon_amarillo.svg";
import download_icon_amarillo from "../../../assets/uiIcons/download_icon_amarillo.svg";
import ExpandedContent from "./ExpandedContent/ExpandedContent";
import ToggleComponent from "../../../utils/ToggleComponent";
import { motion } from "framer-motion";
import { userInfoStore } from "../../../store/userInfoStore";
import { useEffect, useState } from "react";
import axios from "axios";

const ListItems = () => {
  const { isAuthenticated } = userInfoStore();
  const [dataMods, setDataMods] = useState();
  const [dataModSelected, setDataModSelected] = useState();

  const handleAddIconClick = (event) => {
    event.stopPropagation();
    // Lógica o acciones que deseas ejecutar al hacer clic en la imagen add_icon
    console.log("Imagen add_icon fue clickeada");
  };

  // Función para formatear el número
  const formatNumber = (num) => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      const thousands = (num / 1000).toFixed(1);
      return `${thousands}k`;
    } else {
      const millions = (num / 1000000).toFixed(1);
      return `${millions}m`;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/mods")
      .then((res) => {
        setDataMods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="listItems__container">
      {dataMods?.allMods.map((item) => {
        return (
          <div
            onClick={() => {
              setDataModSelected(item.mod_id);
            }}
            key={item.mod_id}
            className="list__item-container"
          >
            <ToggleComponent
              buttonText={
                <>
                  <div className="mod__icon-container">
                    <img
                      src={"data:image/jpeg;base64," + item.thumbnail}
                      alt=""
                      className="mod__icon"
                    />
                  </div>

                  <div className="top__options-container">
                    <img src={pc_icon_amarillo} alt="" className="pc__icon" />
                    {isAuthenticated ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.05 }}
                        className="add_icon-button__container"
                      >
                        <img
                          src={add_icon}
                          alt=""
                          className="add_icon"
                          onClick={handleAddIconClick}
                        />
                      </motion.div>
                    ) : null}

                    <img
                      src={item.consoles ? console_icon_amarillo : console_icon}
                      alt=""
                      className={`console__icon ${
                        item.consoles ? "console__icon-active" : ""
                      }`}
                    />
                  </div>

                  <div className="bottom__stats-container">
                    <h2 className="mod__title">
                      {item.mod_title.length > 38
                        ? `${item.mod_title.slice(0, 38)}...`
                        : item.mod_title}
                    </h2>
                    <div className="bottom__info-container">
                      <div className="individual__info-container">
                        <img
                          src={date_icon_amarillo}
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
                          src={version_icon_amarillo}
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
                          src={star_icon_amarillo}
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
                          src={download_icon_amarillo}
                          alt=""
                          className="info__icon"
                        />
                        <span className="infoTest">9.459</span>
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <ExpandedContent dataModSelected={dataModSelected} />
            </ToggleComponent>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
