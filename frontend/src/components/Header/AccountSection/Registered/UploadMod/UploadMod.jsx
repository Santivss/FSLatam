import "./UploadMod.css";
import upload_icon from "../../../../../assets/uiIcons/upload_icon.svg";
import ToggleComponent from "../../../../../utils/ToggleComponent";
import UploadModComponent from "./UploadModComponent/UploadModComponent";
import { useState } from "react";

const UploadMod = () => {
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
        buttonText={<img src={upload_icon} alt="" className="upload_icon" />}
      ></ToggleComponent>
    </div>
  );
};

export default UploadMod;
