import "./ListItems.css";
import pc_icon_amarillo from "../../../assets/uiIcons/pc_icon_amarillo.svg";
import console_icon_amarillo from "../../../assets/uiIcons/console_icon_amarillo.svg";
import star_icon_amarillo from "../../../assets/uiIcons/star_icon_amarillo.svg";
import bookmark_icon_amarillo from "../../../assets/uiIcons/bookmark_icon_amarillo.svg";
import share_icon_amarillo from "../../../assets/uiIcons/share_icon_amarillo.svg";
import download_icon_amarillo from "../../../assets/uiIcons/download_icon_amarillo.svg";
import ExpandedContent from "./ExpandedContent/ExpandedContent";
import ToggleComponent from "../../../utils/ToggleComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoriesDataFilteredStore } from "../../../store/categoriesDataFilteredStore";

const ListItems = () => {
  const [dataModSelected, setDataModSelected] = useState();
  const [dataMods, setDataMods] = useState(null);
  const { categorySelected } = categoriesDataFilteredStore();

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
    const config = {
      headers: {
        categorySelected: 1,
      },
    };

    axios
      .get("http://localhost:3000/api/mods", config)
      .then((res) => {
        setDataMods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (isolate) => {
    const date = new Date(isolate);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(options);
  };

  return (
    <div className="listItems__container">
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
                    <img
                      src={"data:image/jpeg;base64," + item.thumbnail}
                      alt="mod_image"
                      className="mod__icon"
                    />
                  </div>

                  <div className="modPrincipalSection__container">
                    <span className="modPrincipalSection__title">
                      {item.mod_title}
                    </span>
                    <span className="modPrincipalSection__description">
                      {item.mod_description}
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
                      <span className="modPrincipalSection__date-title">
                        Publicado:
                      </span>
                      <span>{formatDate(item.createdAt)}</span>
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
