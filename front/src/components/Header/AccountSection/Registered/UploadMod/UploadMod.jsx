import "./UploadMod.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
const UploadMod = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div>
      <img src={ui_icons.upload_icon} alt="" className="upload_icon" />
    </div>
  );
};

export default UploadMod;
