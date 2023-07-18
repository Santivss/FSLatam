import "./UploadModComponent.css";
import { motion } from "framer-motion";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";
import Categories from "./Categories/Categories";
import { useEffect, useState } from "react";
import axios from "axios";
import ImagesUpLoad from "./Categories/ImagesUpLoad/ImagesUpLoad";
import { useIconsStore } from "../../../../../../store/ui_icons_store";

const UploadModComponent = () => {
  const { ui_icons } = useIconsStore();
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
    });
  }, [
    imagesDataForPost,
    versionDataForPost,
    descriptionDataForPost,
    categoriesDataForPost,
    link,
  ]);

  /* Funciones para enviar las alertas a las categorias */

  const handleAlertGameSelected = () => {
    setGameSelectedAlertStatus(true);
    setTimeout(() => {
      setGameSelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertCategorySelected = () => {
    setCategorySelectedAlertStatus(true);
    setTimeout(() => {
      setCategorySelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertSubcategorySelected = () => {
    setSubcategorySelectedAlertStatus(true);
    setTimeout(() => {
      setSubcategorySelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertSizeSelected = () => {
    setSizeSelectedAlertStatus(true);
    setTimeout(() => {
      setSizeSelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertAntiquitySelected = () => {
    setAntiquitySelectedAlertStatus(true);
    setTimeout(() => {
      setAntiquitySelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertLink = () => {
    setLinkSelectedAlertStatus(true);
    setTimeout(() => {
      setLinkSelectedAlertStatus(false);
    }, 1000);
  };

  const handleAlertTitle = () => {
    setTitleEmptyAlertStatus(true);
    setTimeout(() => {
      setTitleEmptyAlertStatus(false);
    }, 1500);
  };

  const handleAlertImages = () => {
    setImagesAlertStatus(true);
    setTimeout(() => {
      setImagesAlertStatus(false);
    }, 1500);
  };

  /* Send info to create mod */

  const handlePostDataToBack = () => {
    /* ------------------Alertas de categorias------------------ */
    /* Verificar que el juego este seleccionado */
    if (!dataForCreateMod.categoriesDataForPost.selectedGame) {
      handleAlertGameSelected();
    }
    /* Verificar que la categoria este seleccionada */
    if (!dataForCreateMod.categoriesDataForPost.selectedCategory) {
      handleAlertCategorySelected();
    }
    /* Verificar que la subcategoria este seleccionada */
    if (!dataForCreateMod.categoriesDataForPost.selectedSubcategory) {
      handleAlertSubcategorySelected();
    }
    /* Verificar que size este seleccionado */
    if (!dataForCreateMod.categoriesDataForPost.sizeSelected) {
      handleAlertSizeSelected();
    }
    /* Verificar que anitquity este seleccionado */
    if (!dataForCreateMod.categoriesDataForPost.antiquitySelected) {
      handleAlertAntiquitySelected();
    }
    /* ------------------Alerta de link------------------ */
    if (!dataForCreateMod.link) {
      handleAlertLink();
    }
    /* ------------------Alerta de titulo------------------ */
    if (!dataForCreateMod.versionDataForPost.title) {
      handleAlertTitle();
    }
    /* ------------------Alerta de images------------------ */
    if (dataForCreateMod.imagesDataForPost?.length < 3) {
      handleAlertImages();
    }
    console.log(dataForCreateMod);
    /* Peticion post para enviar la data para crear un mod */
    /*  axios
      .post("http://localhost:3000/api/categories", dataForCreateMod)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err)); */
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
              Enviar
              {/*  <img
                src={ui_icons.wheel_icon}
                alt=""
                className="wheelAnimation"
              /> */}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </form>
  );
};

export default UploadModComponent;
