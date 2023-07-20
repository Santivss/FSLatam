import "./TemperatureGauges.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";

const TemperatureGauges = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div className="temperatureGauges__container">
      <div className="gauge__container">
        <img
          src={ui_icons.temperature_icon}
          alt=""
          className="temperature_icon"
        />
        <img src={ui_icons.aguja} alt="" className="aguja__icon" />
        <div className="barNumbers__container">
          <span className="count__stats">3685</span>
          <span className="title__stats">Downloads</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureGauges;
