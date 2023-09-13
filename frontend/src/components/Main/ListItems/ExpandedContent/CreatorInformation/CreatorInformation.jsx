import "./CreatorInformation.css";
import user_icon_test from "../../../../../assets/uiIcons/user_icon_test.jpg";
import notification_icon_amarillo from "../../../../../assets/uiIcons/notification_icon_amarillo.svg";
import { motion } from "framer-motion";
import BtnTapReusable from "../BtnTapReusable/BtnTapReusable";

const CreatorInformation = ({ fullDataMod }) => {
  return (
    <div className="creatorInformation__container">
      <div className="userIcon__container">
        <img src={user_icon_test} alt="" className="user__icon" />
      </div>
      <div className="infoUser__container">
        <span className="name__user-channel">{fullDataMod?.user_name}</span>

        <div className="userChannel__count-container">
          <span className="count__subs-user">2.5k Subs</span>
          {/* Line */}
          <span className="infoLine__user"></span>
          {/* Line */}
          <span className="count__mods-user">18 Mods</span>
        </div>
      </div>
      <div className="btnSubscribe__container">
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="btnSubscribe"
        >
          Subscribe
        </motion.button>

        <BtnTapReusable
          icon={notification_icon_amarillo}
          alt={notification_icon_amarillo}
        />
      </div>
    </div>
  );
};

export default CreatorInformation;
