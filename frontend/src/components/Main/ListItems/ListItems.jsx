import "./ListItems.css";
import pc_icon_amarillo from "../../../assets/uiIcons/pc_icon_amarillo.svg";
import console_icon_amarillo from "../../../assets/uiIcons/console_icon_amarillo.svg";
import fs19_icon from "../../../assets/uiIcons/fs19_icon.svg";
import fs22_icon from "../../../assets/uiIcons/fs22_icon.svg";
import bookmark_icon_amarillo from "../../../assets/uiIcons/bookmark_icon_amarillo.svg";
import share_icon_amarillo from "../../../assets/uiIcons/share_icon_amarillo.svg";
import download_icon_amarillo from "../../../assets/uiIcons/download_icon_amarillo.svg";
import loading_icon from "../../../assets/uiIcons/loading_icon.svg";
import ExpandedContent from "./ExpandedContent/ExpandedContent";
import ToggleComponent from "../../../utils/ToggleComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoriesDataFilteredStore } from "../../../store/categoriesDataFilteredStore";

const ListItems = () => {
  const [dataModSelected, setDataModSelected] = useState();
  const [dataMods, setDataMods] = useState(null);
  const {
    categorySelected,
    subcategorySelected,
    typesFiltered,
    antiquityAndSizeSelected,
    gameSelected,
  } = categoriesDataFilteredStore();
  const [animIconStatus, setAnimIconStatus] = useState(true);

  // Función para formatear el número
  const formatNumber = (num) => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      const thousands = (num / 1000).toFixed(1);
      return `${thousands}K`;
    } else {
      const millions = (num / 1000000).toFixed(1);
      return `${millions}M`;
    }
  };

  useEffect(() => {
    const params = {
      categorySelected,
      gameSelected,
      subcategorySelected,
      antiquityAndSizeSelected,
      typesFiltered,
    };
    setAnimIconStatus(true);

    axios
      .get("http://localhost:3000/api/mods", {
        params: params,
      })
      .then((res) => {
        setAnimIconStatus(false);
        setDataMods(res.data);
      })
      .catch((err) => {
        setAnimIconStatus(false);
        console.log(err);
      });
  }, [
    categorySelected,
    gameSelected,
    subcategorySelected,
    antiquityAndSizeSelected,
    typesFiltered,
  ]);

  const formatDate = (isolate) => {
    const date = new Date(isolate);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(options);
  };

  return (
    <div className="listItems__container">
      <div className="listItems__titleContainer">
        <span className="listItems__modsTitle">
          Total de Mods: {dataMods?.allMods.length}
        </span>

        {animIconStatus ? (
          <img
            src={loading_icon}
            alt="loading_icon"
            className="listItems__loadingIcon"
          />
        ) : null}
      </div>
      {dataMods?.allMods.map((item) => {
        return (
          <div key={item.mod_id}>
            <ToggleComponent
              buttonText={
                <div
                  onClick={() => {
                    setDataModSelected(item.mod_id);
                  }}
                  className="list__item-container"
                >
                  <div className="mod__icon-container">
                    {item.thumbnail ? (
                      <img
                        src={"data:image/jpeg;base64," + item.thumbnail}
                        alt="mod_image"
                        className="mod__icon"
                      />
                    ) : (
                      <img src={loading_icon} alt="" />
                    )}
                  </div>

                  <div className="modPrincipalSection__container">
                    <span className="modPrincipalSection__title">
                      {item.mod_title}
                    </span>
                    <span className="modPrincipalSection__description">
                      {item.mod_description.length > 170
                        ? item.mod_description.substring(0, 170) + "..."
                        : item.mod_description}
                    </span>

                    <div className="modPrincipalSectionStats__container">
                      <div className="modPrincipalCompatibility__container">
                        <span className="modPrincipalSectionStats__compatibility">
                          Compatibilidad:
                        </span>

                        {item.pc ? (
                          <img
                            src={pc_icon_amarillo}
                            alt="pc_icon_amarillo"
                            className="principalSectionCompatibility__icon"
                          />
                        ) : null}

                        {item.consoles ? (
                          <img
                            src={console_icon_amarillo}
                            alt="console_icon_amarillo"
                            className="principalSectionCompatibility__icon"
                          />
                        ) : null}
                      </div>
                      <div>
                        <span className="modPrincipalSection__date-title">
                          Publicado:
                        </span>
                        <span>{formatDate(item.createdAt)}</span>
                      </div>
                      <div className="compatibilityGame__container">
                        <span className="modPrincipalSection__game">
                          Disponible para:
                        </span>

                        {item.game_id === 1 ? (
                          <img
                            src={fs19_icon}
                            alt="fs19_icon"
                            className="compatibilityGame__icon"
                          />
                        ) : (
                          <img
                            src={fs22_icon}
                            alt="fs22_icon"
                            className="compatibilityGame__icon"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="modPrincipalSectionOptions__container">
                    <div className="modPrincipalSectionButtons__container">
                      <span>
                        <img
                          src={share_icon_amarillo}
                          alt=""
                          className="principalSectionButton"
                        />
                      </span>
                      <span>
                        <img
                          src={bookmark_icon_amarillo}
                          alt=""
                          className="principalSectionButton"
                        />
                      </span>
                    </div>
                    <div className="principalSectionDownload__container">
                      <img
                        src={download_icon_amarillo}
                        alt="download_icon_amarillo"
                        className="principalSectionDownload__icon"
                      />
                      <span className="principalSectionDownload__count">
                        {formatNumber(item.downloadsCount)}
                      </span>
                    </div>
                  </div>
                </div>
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
