import "./TitleAndDownload.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import { motion } from "framer-motion";
import BtnTapReusable from "../BtnTapReusable/BtnTapReusable";

const TitleAndDownload = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="titleAndDownload__container">
      <div className="expandedContent__title-container">
        <h1 className="expandedContent__title">House Polka Sesnotak </h1>
      </div>
      <div className="buttonsExpandedContent__container">
        <div className="buttonSmall__container">
          <BtnTapReusable
            icon={ui_icons.star_icon_amarillo}
            alt={ui_icons.star_icon_amarillo}
          />

          <BtnTapReusable
            icon={ui_icons.report_icon_amarillo}
            alt={ui_icons.report_icon_amarillo}
          />

          <BtnTapReusable
            icon={ui_icons.share_icon_amarillo}
            alt={ui_icons.share_icon_amarillo}
          />
        </div>

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="expandedContent__button-download">Download</button>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleAndDownload;
