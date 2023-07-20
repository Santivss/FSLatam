import "./PrincipalSection.css";
import SlideComponent from "./SlideComponent/SlideComponent";
import { useIconsStore } from "../../../store/ui_icons_store";
import TopModders from "./TopModders/TopModders";
import TopMods from "./TopMods/TopMods";

const PrincipalSection = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="principalSection__container">
      <TopModders />
      <SlideComponent />
      <TopMods />
    </div>
  );
};

export default PrincipalSection;
