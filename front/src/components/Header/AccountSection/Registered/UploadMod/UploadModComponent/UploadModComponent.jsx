import { useState } from "react";
import "./UploadModComponent.css";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../../../../store/ui_icons_store";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";

const UploadModComponent = () => {
  const { ui_icons } = useIconsStore();

  return (
    <form className="uploadModComponent__container">
      <h1 className="uploadComponent__title">Subir mod</h1>
      <div className="advertise__container">
        {/* -----------Mensaje de Recomendacion----------- */}
        <span className="advertise_title">
          Por favor revisar y resolver cualquier error en el log que pueda tener
          el mod antes de enviarlo, ya que esto genera problemas rendimiento en
          el juego.
        </span>
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button type="button" className="buttonConfirm__container">
            Ok
          </button>
        </motion.div>
      </div>

      <InputVersion />

      <InputDescription />
      {/*  <div>
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          type="button"
          className=""
        ></motion.button>
      </div> */}
    </form>
  );
};

export default UploadModComponent;
