import "./UploadMod.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import ToggleComponent from "../../../../../utils/ToggleComponent";
import UploadModComponent from "./UploadModComponent/UploadModComponent";
import { useState } from "react";

const UploadMod = () => {
  const { ui_icons } = useIconsStore();
  const [unmountComponent, setUnmountComponent] = useState(false);

  const handleunmountComponent = () => {
    setUnmountComponent(!unmountComponent);
  };

  return (
    <div className="uploadMod__container">
      <ToggleComponent
        unmountComponent={unmountComponent}
        children={
          <UploadModComponent handleunmountComponent={handleunmountComponent} />
        }
        buttonText={
          <img src={ui_icons.upload_icon} alt="" className="upload_icon" />
        }
      ></ToggleComponent>
    </div>
  );
};

export default UploadMod;
