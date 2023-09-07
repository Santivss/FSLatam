import "./TopStatsModsUsers.css";
import user_icon from "../../../../assets/uiIcons/user_icon.svg";
import mods_icon from "../../../../assets/uiIcons/mods_icon.svg";
import download_icon_amarillo from "../../../../assets/uiIcons/download_icon_amarillo.svg";
import gold_icon from "../../../../assets/uiIcons/gold_icon.svg";
import silver_icon from "../../../../assets/uiIcons/silver_icon.svg";
import bronze_icon from "../../../../assets/uiIcons/bronze_icon.svg";
import wheel_icon from "../../../../assets/uiIcons/wheel_icon.svg";

const TopStatsModsUsers = ({ topsData }) => {
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
  const sortedData = topsData?.last30DaysUsers.sort(
    (a, b) => b.totalDownloads - a.totalDownloads
  );

  return (
    <div className="topStatsModsUsers__container">
      <span className="topStatsModsUsers__title">Top 10 Modders</span>
      <div className="topStatsModsUsers__sections-container">
        <img
          src={user_icon}
          alt=""
          className="topStatsModsUsers__mods-icon person"
        />
        <img
          src={mods_icon}
          alt=""
          className="topStatsModsUsers__mods-icon mods"
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
          <div key={item.user_name} className={itemClass}>
            <span className="topStatsModsUsersItem__number">{index + 1}</span>
            {iconToShow}
            <span className="topStatsModsUsersItem__name">
              {item.user_name}
            </span>
            <span className="topStatsModsUsersItem__modsCount">
              {item.modsCount}
            </span>
            <span className="topStatsModsUsersItem__downloadsCount">
              {formatNumber(item.totalDownloads)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TopStatsModsUsers;
