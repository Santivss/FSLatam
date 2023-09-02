import "./Search.css";
import { motion } from "framer-motion";

import lupa_icon from "../../../assets/uiIcons/lupa_icon.svg";

const Search = () => {
  return (
    <div className="search__container">
      <input type="text" placeholder="Search" className="search__input" />
      <motion.div
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <button className="btn">Search</button>
      </motion.div>
      <img src={lupa_icon} alt="" className="lupa_icon" />
    </div>
  );
};

export default Search;
