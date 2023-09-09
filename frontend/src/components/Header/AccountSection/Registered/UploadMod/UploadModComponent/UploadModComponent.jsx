import "./UploadModComponent.css";
import { motion } from "framer-motion";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";
import Categories from "./Categories/Categories";
import { useEffect, useState } from "react";
import axios from "axios";
import ImagesUpLoad from "./Categories/ImagesUpLoad/ImagesUpLoad";
import loading_icon from "../../../../../../assets/uiIcons/loading_icon.svg";

import { userInfoStore } from "../../../../../../store/userInfoStore";

const UploadModComponent = ({ handleunmountComponent }) => {
  const { userId, userName } = userInfoStore();
  const [advirtiseMessage, setAdvirtiseMessage] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [dataForCreateMod, setDataForCreateMod] = useState(null);
  const [imagesDataForPost, setImagesDataForPost] = useState(null);
  const [versionDataForPost, setVersionDataForPost] = useState(null);
  const [descriptionDataForPost, setDescriptionDataForPost] = useState(null);
  const [categoriesDataForPost, setCategoriesDataForPost] = useState(null);
  /* Estados para enviar las alertas */
  const [gameSelectedAlertStatus, setGameSelectedAlertStatus] = useState(false);
  const [categorySelectedAlertStatus, setCategorySelectedAlertStatus] =
    useState(false);
  const [subcategorySelectedAlertStatus, setSubcategorySelectedAlertStatus] =
    useState(false);
  const [sizeSelectedAlertStatus, setSizeSelectedAlertStatus] = useState(false);
  const [antiquitySelectedAlertStatus, setAntiquitySelectedAlertStatus] =
    useState(false);
  const [linkSelectedAlertStatus, setLinkSelectedAlertStatus] = useState(false);
  const [titleEmptyAlertStatus, setTitleEmptyAlertStatus] = useState(false);
  const [imagesAlertStatus, setImagesAlertStatus] = useState(false);
  /* Mientras se realiza la peticion post */
  const [postRequestStatus, setPostRequestStatus] = useState(false);
  const [clearInputsAfterCreateMod, setClearInputsAfterCreateMod] =
    useState(false);

  /* ----------------------------------------- */
  const [link, setLink] = useState("");

  const handleLinkChange = (event) => {
    const value = event.target.value.trim();
    setLink(value);
  };

  /* Get categories for create UI */
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategoriesData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  /* Update Info for post request */

  useEffect(() => {
    /* Crear el objeto para enviarlo*/
    setDataForCreateMod({
      imagesDataForPost,
      versionDataForPost,
      descriptionDataForPost,
      categoriesDataForPost,
      link,
      userId,
      userName,
    });
  }, [
    imagesDataForPost,
    versionDataForPost,
    descriptionDataForPost,
    categoriesDataForPost,
    link,
    userId,
    userName,
  ]);

  /* Funciones para manejar las alertas */

  const handleAlertStatus = (state) => {
    state(true);
    setTimeout(() => {
      state(false);
    }, 1500);
  };

  /* Verifica si hay alguna advertencia antes de enviar la informacion y la envia */

  const handlePostDataToBack = () => {
    let allConditionsTrue = true;
    const conditions = [
      {
        titleAlert: "Elige un juego",
        condition: dataForCreateMod.categoriesDataForPost.selectedGame,
        state: setGameSelectedAlertStatus,
      },
      {
        nameAlert: "Selcciona una categoría",
        condition: dataForCreateMod.categoriesDataForPost.selectedCategory,
        state: setCategorySelectedAlertStatus,
      },
      {
        titleAlert: "Selecciona una subcategoría",
        condition: dataForCreateMod.categoriesDataForPost.selectedSubcategory,
        state: setSubcategorySelectedAlertStatus,
      },
      {
        titleAlert: "Selecciona el tamaño del mod",
        condition: dataForCreateMod.categoriesDataForPost.sizeSelected,
        state: setSizeSelectedAlertStatus,
      },
      {
        titleAlert: "Selecciona la antigüedad del mod",
        condition: dataForCreateMod.categoriesDataForPost.antiquitySelected,
        state: setAntiquitySelectedAlertStatus,
      },
      {
        titleAlert: "Agrega el link al mod",
        condition: dataForCreateMod.link,
        state: setLinkSelectedAlertStatus,
      },
      {
        titleAlert: "Agrega un titulo para el mod",
        condition: dataForCreateMod.versionDataForPost.title,
        state: setTitleEmptyAlertStatus,
      },
      {
        titleAlert: "Carga al menos 3 imagenes",
        condition: dataForCreateMod.imagesDataForPost,
        state: setImagesAlertStatus,
      },
    ];

    if (dataForCreateMod.antiquitySelected === undefined) {
      conditions[conditions.length - 4].condition = true;
    }

    if (dataForCreateMod.imagesDataForPost?.length < 3) {
      conditions[conditions.length - 1].condition = false;
    }

    for (const iterator of conditions) {
      if (!iterator.condition) {
        handleAlertStatus(iterator.state);
        allConditionsTrue = false;
      }
    }

    if (allConditionsTrue) {
      setPostRequestStatus(true);
      axios
        .post("http://localhost:3000/api/createmod", dataForCreateMod)
        .then((res) => {
          setPostRequestStatus(false);
          window.location.reload();
          setTimeout(() => {
            handleunmountComponent();
          }, 2000);
        })
        .catch((err) => {
          setPostRequestStatus(false), console.log(err);
        });
    }
  };

  /* Crear el el estado con las categorias*/
  const handleCategoriesFiltered = (categoriesSelected) => {
    setCategoriesDataForPost(categoriesSelected);
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

  /* Traer la description */
  const handleDescriptionData = (description) => {
    setDescriptionDataForPost(description);
  };

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
          <ImagesUpLoad
            handleImagesData={handleImagesData}
            imagesAlertStatus={imagesAlertStatus}
          />
          <InputVersion
            handleVersionData={handleVersionData}
            titleEmptyAlertStatus={titleEmptyAlertStatus}
          />
          <InputDescription handleDescriptionData={handleDescriptionData} />
          <Categories
            gameSelectedAlertStatus={gameSelectedAlertStatus}
            categories={categoriesData}
            handleCategoriesFiltered={handleCategoriesFiltered}
            categorySelectedAlertStatus={categorySelectedAlertStatus}
            subcategorySelectedAlertStatus={subcategorySelectedAlertStatus}
            sizeSelectedAlertStatus={sizeSelectedAlertStatus}
            antiquitySelectedAlertStatus={antiquitySelectedAlertStatus}
          />
          <div className="linkMod__container">
            <span className="linkMod__title">Link</span>
            <input
              type="input"
              className={`inputLinkMod__title ${
                linkSelectedAlertStatus ? "linkAlertBorder" : ""
              }`}
              placeholder="https://sharemods.com/yfm6tlbowfl8/FS22_Juan_Bautista_Alberdi.zip.html"
              value={link}
              onChange={handleLinkChange}
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
              {postRequestStatus ? (
                <img
                  src={loading_icon}
                  alt="loading_icon"
                  className="myMods__loadingIcon"
                />
              ) : (
                <span className="buttonSendMod__title">Enviar</span>
              )}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </form>
  );
};

export default UploadModComponent;
