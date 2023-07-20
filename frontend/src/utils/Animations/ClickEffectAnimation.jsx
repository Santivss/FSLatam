import { motion } from "framer-motion";

const ClickEffect = () => {
  return <motion.div className="box" whileTap={{ scale: 0.95 }} />;
};

export default ClickEffect;
