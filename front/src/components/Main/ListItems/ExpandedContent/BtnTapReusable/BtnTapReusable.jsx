import "./BtnTapReusable.css";
import { motion } from "framer-motion";

const BtnTapReusable = ({ icon, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      <button className="expandedContent__button">
        <img src={icon} alt={alt} className="expandedContent__img" />
      </button>
    </motion.div>
  );
};

export default BtnTapReusable;
