import "./UploadModComponent.css";
import { motion } from "framer-motion";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";
import Categories from "./Categories/Categories";
import { useEffect, useState } from "react";
import axios from "axios";
import ImagesUpLoad from "./Categories/ImagesUpLoad/ImagesUpLoad";

const UploadModComponent = () => {
  const [advirtiseMessage, setAdvirtiseMessage] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesFilteredPost, setCategoriesFilteredPost] = useState(null);
  const [imagesDataForPost, setImagesDataForPost] = useState(null);
  const [versionDataForPost, setVersionDataForPost] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategoriesData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoriesFiltered = (dataToSend) => {
    setCategoriesFilteredPost({
      dataToSend,
      imagesDataForPost,
    });
  };

  /* Post data to back */

  const handlePostDataToBack = () => {
    axios
      .post("http://localhost:3000/api/categories", categoriesFilteredPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  /* Traer las imagenes para enviarlas */
  const handleImagesData = (imagesData) => {
    setImagesDataForPost(imagesData);
  };

  /* Traer la informacion de version */
  const handleVersionData = (titleInputValue, versionData) => {
    setVersionDataForPost({
      version: versionData,
      title: titleInputValue,
    });
  };

  console.log(versionDataForPost);

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
          <ImagesUpLoad handleImagesData={handleImagesData} />
          <InputVersion handleVersionData={handleVersionData} />
          <InputDescription />
          <Categories
            categories={categoriesData}
            handleCategoriesFiltered={handleCategoriesFiltered}
          />
          <div className="linkMod__container">
            <span className="linkMod__title">Link</span>
            <input
              type="input"
              className="inputLinkMod__title"
              placeholder="https://sharemods.com/yfm6tlbowfl8/FS22_Juan_Bautista_Alberdi.zip.html"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="sendMod__container"
          >
            <button
              type="button"
              className="buttonSendMod"
              onClick={handlePostDataToBack}
            >
              Enviar
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </form>
  );
};

export default UploadModComponent;
