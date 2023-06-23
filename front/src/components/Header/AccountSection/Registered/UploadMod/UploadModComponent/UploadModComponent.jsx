import { useState } from "react";
import "./UploadModComponent.css";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../../../../store/ui_icons_store";

const UploadModComponent = () => {
  const { ui_icons } = useIconsStore();

  const [first, setfirst] = useState(false);

  return (
    <form className="uploadModComponent__container">
      <h1 className="uploadComponent__title">Subir mod</h1>
      <div className="advertise__container">
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

      <div className="uploadMod__title-container">
        <span className="uploadmod__title">Título</span>
        <input type="input" className="uploadmodinput__title" />
        {first ? (
          <span className="uploadmod__errormessage-title">
            mensaje de error
          </span>
        ) : null}
        <span className="uploadmod__version">Versión</span>
        <input
          type="input"
          className="uploadmodinput__version"
          placeholder="1.0.0"
        />
        {first ? (
          <span className="uploadmod__errormessage-version">
            mensaje de error
          </span>
        ) : null}
      </div>

      <div className="gameSelection__container">
        <span className="gameSelection__title">Juego</span>
        <img src={ui_icons.fs19_icon} alt="" className="gameSelection__icon" />
        <img src={ui_icons.fs22_icon} alt="" className="gameSelection__icon" />
      </div>

      <div>
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          type="button"
          className=""
        ></motion.button>
      </div>
    </form>
  );
};

export default UploadModComponent;
