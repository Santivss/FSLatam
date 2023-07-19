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
  /* Mientras se realiza la peticion post */
  const [postRequestStatus, setPostRequestStatus] = useState(false);

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

  /* Función genérica para manejar las alertas */
  const handleAlert = (alertState, setAlertState, time = 1200) => {
    setAlertState(true);
    setTimeout(() => {
      setAlertState(false);
    }, time);
  };

  /* Send info to create mod */
  const handlePostDataToBack = () => {
    const conditions = [
      {
        condition: !dataForCreateMod.categoriesDataForPost.selectedGame,
        alertFunction: () =>
          handleAlert(gameSelectedAlertStatus, setGameSelectedAlertStatus),
      },
      {
        condition: !dataForCreateMod.categoriesDataForPost.selectedCategory,
        alertFunction: () =>
          handleAlert(
            categorySelectedAlertStatus,
            setCategorySelectedAlertStatus
          ),
      },
      {
        condition: !dataForCreateMod.categoriesDataForPost.selectedSubcategory,
        alertFunction: () =>
          handleAlert(
            subcategorySelectedAlertStatus,
            setSubcategorySelectedAlertStatus
          ),
      },
      {
        condition: !dataForCreateMod.categoriesDataForPost.sizeSelected,
        alertFunction: () =>
          handleAlert(sizeSelectedAlertStatus, setSizeSelectedAlertStatus),
      },
      {
        condition: !dataForCreateMod.categoriesDataForPost.antiquitySelected,
        alertFunction: () =>
          handleAlert(
            antiquitySelectedAlertStatus,
            setAntiquitySelectedAlertStatus
          ),
      },
      {
        condition: !dataForCreateMod.link,
        alertFunction: () =>
          handleAlert(linkSelectedAlertStatus, setLinkSelectedAlertStatus),
      },
      {
        condition: !dataForCreateMod.versionDataForPost.title,
        alertFunction: () =>
          handleAlert(titleEmptyAlertStatus, setTitleEmptyAlertStatus, 1500),
      },
      {
        condition:
          dataForCreateMod.imagesDataForPost?.length < 3 ||
          dataForCreateMod.imagesDataForPost === null,
        alertFunction: () =>
          handleAlert(imagesAlertStatus, setImagesAlertStatus, 1500),
      },
    ];

    // Verificar cada condición y activar la alerta correspondiente si no se cumple
    const activatedConditions = conditions.filter(({ condition }) => condition);
    const activatedAlerts = activatedConditions.map(
      ({ alertFunction }) => alertFunction
    );

    activatedConditions.forEach(({ condition }) => {
      console.log(`Activada alerta para condición: ${condition}`);
    });

    // Actualizar los estados según las alertas activadas
    activatedAlerts.forEach((alertFunction) => alertFunction());

    // Verificar si se activó alguna alerta y no realizar la petición POST
    const alertsActivated = activatedConditions.length > 0;

    if (!alertsActivated) {
      axios
        .post("http://localhost:3000/api/createmod", dataForCreateMod)
        .then((res) => {
          console.log(res.data);
          setPostRequestStatus(true);
          setTimeout(() => {
            setPostRequestStatus(false);
          }, 2000);
        })
        .catch((err) => console.log(err));
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
                  src={ui_icons.wheel_icon}
                  alt=""
                  className="wheelAnimation"
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
