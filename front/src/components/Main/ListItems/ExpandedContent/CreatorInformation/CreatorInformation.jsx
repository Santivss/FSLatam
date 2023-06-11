import "./CreatorInformation.css";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import { motion } from "framer-motion";
import BtnTapReusable from "../BtnTapReusable/BtnTapReusable";

const CreatorInformation = () => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="creatorInformation__container">
      <div className="userIcon__container">
        <img src={ui_icons.user_icon_test} alt="" className="user__icon" />
      </div>
      <div className="infoUser__container">
        <span className="name__user-channel">RuckingFS </span>

        <div className="userChannel__count-container">
          <span className="count__subs-user">2.5k Subs</span>
          {/* Line */}
          <span className="infoLine__user"></span>
          {/* Line */}
          <span className="count__mods-user">18 Mods</span>
        </div>
      </div>
      <div className="btnSubscribe__container">
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="btnSubscribe">Subscribe</button>
        </motion.div>

        <BtnTapReusable
          icon={ui_icons.notification_icon_amarillo}
          alt={ui_icons.notification_icon_amarillo}
        />
      </div>
    </div>
  );
};

export default CreatorInformation;
