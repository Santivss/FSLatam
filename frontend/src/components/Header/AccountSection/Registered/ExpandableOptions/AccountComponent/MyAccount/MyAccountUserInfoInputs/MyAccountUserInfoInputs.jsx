import "./MyAccountUserInfoInputs.css";
import { userInfoStore } from "../../../../../../../../store/userInfoStore";
import loading_icon from "../../../../../../../../assets/uiIcons/loading_icon.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyAccountUserInfoInputs = () => {
  const { userName, email, userId } = userInfoStore();
  const textInputs = [
    {
      element: "name",
      type: "text",
      title: "Nombre de usuario",
      placeholder: userName,
    },
    { element: "email", type: "email", title: "Email", placeholder: email },
    {
      element: "actualPass",
      type: "password",
      title: "Contraseña actual",
      placeholder: "",
    },
    {
      element: "newPass",
      type: "password",
      title: "Nueva Contraseña",
      placeholder: "",
    },
    {
      element: "repeatPass",
      type: "password",
      title: "Repetir Contraseña",
      placeholder: "",
    },
  ];
  const [errorMessageStatus, setErrorMessageStatus] = useState(null);
  const [requestStatus, setRequestStatus] = useState(false);

  // Inicializa un objeto de estado para almacenar los valores de cada campo de entrada
  const initialInputValues = {};
  textInputs.forEach((item) => {
    initialInputValues[item.element] = item.placeholder;
  });

  // Inicializa un objeto de estado para rastrear si cada input ha cambiado
  const initialInputChanged = {};
  textInputs.forEach((item) => {
    initialInputChanged[item.element] = false;
  });

  const [inputValues, setInputValues] = useState(initialInputValues);
  const [inputChanged, setInputChanged] = useState(initialInputChanged);

  const handleInputChange = (e, element) => {
    const newValue = e.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [element]: newValue,
    }));

    // Marca el input como cambiado si el nuevo valor es diferente al valor original
    setInputChanged((prevChanged) => ({
      ...prevChanged,
      [element]: newValue !== initialInputValues[element],
    }));
  };

  const handleDataForChange = () => {
    if (inputValues.newPass !== inputValues.repeatPass) {
      setErrorMessageStatus("Las contraseñas no coinciden");
      setTimeout(() => {
        setErrorMessageStatus(false);
      }, 1500);
    } else {
      setRequestStatus(true);
      axios
        .post(
          `https://fslatam-back.onrender.com/api/accountData/${userId}`,
          inputValues
        )
        .then((res) => {
          setErrorMessageStatus(res.data.messages);
          setRequestStatus(false);
          setTimeout(() => {
            setErrorMessageStatus(false);
          }, 2000);
        })
        .catch((err) => console.log(err));
    }
  };

  // Verifica si algún input ha cambiado
  const hasInputChanged = Object.values(inputChanged).some((value) => value);

  return (
    <div className="myAccountUserInfoInputs__container">
      <span className="myAccountUserInfoInputs__title">
        Configuración de la cuenta
      </span>
      {textInputs.map((item, index) => {
        return (
          <div key={index} className="userInfoInputs__container">
            <span className="userInfoInputs__input-title">{item.title}</span>
            <input
              type={item.type}
              value={inputValues[item.element]}
              onChange={(e) => handleInputChange(e, item.element)}
              className="userInfoInputs__input"
              placeholder={item.placeholder}
            />
          </div>
        );
      })}
      <span className="userInfoInputs__errorMessageIitle">
        {errorMessageStatus ? errorMessageStatus : ""}
      </span>
      <motion.div
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <button
          className={`userInfoInputs__buttonSave ${
            hasInputChanged ? "buttonSave-active" : "buttonSave-inactive"
          }`}
          onClick={handleDataForChange}
          disabled={!hasInputChanged}
        >
          {requestStatus ? (
            <img
              src={loading_icon}
              alt="loading_icon"
              className="userInfoInputs__buttonSave-loadingIcon"
            />
          ) : (
            "Guardar"
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default MyAccountUserInfoInputs;
