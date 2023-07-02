import "./OptionsReusable.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";

const OptionsReusable = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="optionsReusable__container">
      Game
      <img
        src={ui_icons.triangle_icon}
        alt=""
        className="optionsTriangle__icon"
      />
    </div>
  );
};

export default OptionsReusable;
