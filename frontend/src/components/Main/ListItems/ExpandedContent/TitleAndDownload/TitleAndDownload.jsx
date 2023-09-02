import "./TitleAndDownload.css";
import star_icon_amarillo from "../../../../../assets/uiIcons/star_icon_amarillo.svg";
import report_icon_amarillo from "../../../../../assets/uiIcons/report_icon_amarillo.svg";
import share_icon_amarillo from "../../../../../assets/uiIcons/share_icon_amarillo.svg";
import { motion } from "framer-motion";
import BtnTapReusable from "../BtnTapReusable/BtnTapReusable";

const TitleAndDownload = ({ fullDataMod }) => {
  return (
    <div className="titleAndDownload__container">
      <div className="expandedContent__title-container">
        <h1 className="expandedContent__title">{fullDataMod}</h1>
      </div>
      <div className="buttonsExpandedContent__container">
        <div className="buttonSmall__container">
          <BtnTapReusable icon={star_icon_amarillo} alt="star_icon_amarillo" />

          <BtnTapReusable
            icon={report_icon_amarillo}
            alt="report_icon_amarillo"
          />

          <BtnTapReusable
            icon={share_icon_amarillo}
            alt="share_icon_amarillo"
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
