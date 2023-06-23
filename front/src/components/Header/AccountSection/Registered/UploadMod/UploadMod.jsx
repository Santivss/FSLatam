import "./UploadMod.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import ToggleComponent from "../../../../../utils/ToggleComponent";
import UploadModComponent from "./UploadModComponent/UploadModComponent";

const UploadMod = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="uploadMod__container">
      <ToggleComponent
        children={<UploadModComponent />}
        buttonText={
          <img src={ui_icons.upload_icon} alt="" className="upload_icon" />
        }
      ></ToggleComponent>
    </div>
  );
};

export default UploadMod;
