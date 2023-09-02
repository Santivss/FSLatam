import "./TopMods.css";
import p_icon from "../../../../assets/uiIcons/p_icon.svg";
import mods_icon from "../../../../assets/uiIcons/mods_icon.svg";
import download_icon_amarillo from "../../../../assets/uiIcons/download_icon_amarillo.svg";
import gold_icon from "../../../../assets/uiIcons/gold_icon.svg";
import silver_icon from "../../../../assets/uiIcons/silver_icon.svg";
import bronze_icon from "../../../../assets/uiIcons/bronze_icon.svg";

const TopMods = ({ topsData }) => {
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

  // Ordenar los datos por la cantidad de descargas antes de renderizarlos
  const sortedData = topsData?.last30DaysMods.sort(
    (a, b) => b.totalDownloads - a.totalDownloads
  );

  return (
    <div className="topStatsModsUsers__container">
      <span className="topStatsModsUsers__title">Top 10 Modders</span>
      <div className="topStatsModsUsers__sections-container">
        <img
          src={p_icon}
          alt=""
          className="topStatsModsUsers__mods-icon position"
        />
        <img
          src={mods_icon}
          alt=""
          className="topStatsModsUsers__mods-icon person"
        />

        <img
          src={download_icon_amarillo}
          alt=""
          className="topStatsModsUsers__mods-icon downloads"
        />
      </div>
      {sortedData?.map((item, index) => {
        let itemClass = "topStatsModsUsersItem__container";
        let iconToShow = null;

        if (index === 0) {
          iconToShow = (
            <img src={gold_icon} alt="" className="prizeModder__icon" />
          );
        } else if (index === 1) {
          iconToShow = (
            <img src={silver_icon} alt="" className="prizeModder__icon" />
          );
        } else if (index === 2) {
          iconToShow = (
            <img src={bronze_icon} alt="" className="prizeModder__icon" />
          );
        }

        return (
          <div key={item.mod_id} className={itemClass}>
            <span className="topStatsModsUsersItem__number">{index + 1}</span>
            {iconToShow}
            <span className="topStatsModsUsersItem__name">
              {item.mod_title.length > 20
                ? `${item.mod_title.slice(0, 20)}...`
                : item.mod_title}
            </span>
            <span className="topStatsModsUsersItem__modsCount">
              {/* {item.user_name} */}
            </span>
            <span className="topStatsModsUsersItem__downloadsCount downloadsCount__fromTopMods">
              {formatNumber(item.downloadsCount)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TopMods;
