import "./TopStatsModsUsers.css";
import { useIconsStore } from "../../../../store/ui_icons_store";

const TopStatsModsUsers = ({ topsData }) => {
  const { ui_icons } = useIconsStore();

  // Ordenar los datos por la cantidad de descargas antes de renderizarlos
  const sortedData = topsData?.last30DaysUsers.sort(
    (a, b) => b.totalDownloads - a.totalDownloads
  );

  return (
    <div className="topStatsModsUsers__container">
      <span className="topStatsModsUsers__title">Top 10 Modders</span>
      <div className="topStatsModsUsers__sections-container">
        <img
          src={ui_icons.P_icon}
          alt=""
          className="topStatsModsUsers__mods-icon position"
        />
        <img
          src={ui_icons.person_icon}
          alt=""
          className="topStatsModsUsers__mods-icon person"
        />
        <img
          src={ui_icons.mods_icon}
          alt=""
          className="topStatsModsUsers__mods-icon mods"
        />
        <img
          src={ui_icons.download_icon_amarillo}
          alt=""
          className="topStatsModsUsers__mods-icon downloads"
        />
      </div>
      {sortedData?.map((item, index) => {
        let itemClass = "topStatsModsUsersItem__container";
        let iconToShow = null;

        if (index === 0) {
          iconToShow = (
            <img
              src={ui_icons.gold_icon}
              alt=""
              className="prizeModder__icon"
            />
          );
        } else if (index === 1) {
          iconToShow = (
            <img
              src={ui_icons.silver_icon}
              alt=""
              className="prizeModder__icon"
            />
          );
        } else if (index === 2) {
          iconToShow = (
            <img
              src={ui_icons.bronze_icon}
              alt=""
              className="prizeModder__icon"
            />
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
              {item.totalDownloads}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TopStatsModsUsers;
