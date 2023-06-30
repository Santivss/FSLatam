import "./UploadModComponent.css";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../../../../store/ui_icons_store";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";
import Categories from "./Categories/Categories";
import { useEffect, useState } from "react";
import axios from "axios";

const UploadModComponent = () => {
  const { ui_icons } = useIconsStore();
  const [advirtiseMessage, setAdvirtiseMessage] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <form className="uploadModComponent__container">
      {advirtiseMessage ? null : (
        <motion.div
          className="advertise__container"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <span className="advertise_title">
            Por favor revisar y resolver cualquier error en el log que pueda
            tener el mod antes de enviarlo, ya que esto genera problemas
            rendimiento en el juego.
          </span>
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <button
              onClick={() => {
                setAdvirtiseMessage(true);
              }}
              type="button"
              className="buttonConfirm__container"
            >
              Ok
            </button>
          </motion.div>
        </motion.div>
      )}

      {advirtiseMessage ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.3 }}
          className="uploadModComponent__elements-container"
        >
          <h1 className="uploadComponent__title">Subir mod</h1>
          <InputVersion />
          <InputDescription />
          <Categories categories={categoriesData} />
          <button type="button">Enviar</button>
        </motion.div>
      ) : null}
    </form>
  );
};

export default UploadModComponent;
