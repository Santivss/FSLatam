import React, { useState, useRef } from "react";
import "./SignIn.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import correct_icon from "../../../../../assets/uiIcons/correct_icon.svg";
import incorrect_icon from "../../../../../assets/uiIcons/incorrect_icon.svg";
import loading_icon from "../../../../../assets/uiIcons/loading_icon.svg";
import question_mark_icon from "../../../../../assets/uiIcons/question_mark_icon.svg";
import validator from "validator";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Configuración y estado del formulario usando react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Referencia a la contraseña para comparar con el campo de confirmación de contraseña
  const password = useRef({});
  password.current = watch("password", "");

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    setIsFormSubmitted(true);
    setIsLoading(true);

    // Filtrar los datos necesarios para la solicitud
    const { confirmPassword, ...requestData } = data;
    const modifiedData = {
      user_name: requestData.userName,
      email: requestData.email,
      password: requestData.password,
    };

    // Hacer la solicitud POST a la API
    axios
      .post("https://fslatam-back.onrender.com/api/register", modifiedData)
      .then((response) => {
        setResponseMessage(response.data.message);
        setTimeout(() => {
          setResponseMessage(null);
        }, 3000);
        setIsLoading(false);
        localStorage.setItem("token", response.data.token);

        if (
          response.data.message === "Este nombre de usuario no está disponible"
        ) {
          setTimeout(() => {
            setValue("userName", "");
          }, 1500);
        } else if (response.data.message === "Este email ya fue utilizado") {
          setTimeout(() => {
            setValue("email", "");
          }, 1500);
        } else {
          reset();
          window.location.reload();
        }
      })

      .catch((error) => {
        // Ocurrió un error durante la petición
        console.error(error);
      });
  };

  // Objeto para almacenar los errores de los campos
  const inputErrors = {
    userName: errors.userName,
    email: errors.email,
    password: errors.password,
    confirmPassword: errors.confirmPassword,
  };

  // Verificar si se deben mostrar los iconos correctos
  const shouldShowCorrectIcons = (fieldName) => {
    return (
      (isFormSubmitted && !errors[fieldName] && !inputErrors[fieldName]) ||
      (!isFormSubmitted && !errors[fieldName] && watch(fieldName))
    );
  };

  return (
    <div className="signIn__container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signInElements__container"
      >
        <span className="signIn__title">Crear una cuenta</span>

        {/* --------------UserName-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("userName") && (
              <img src={correct_icon} alt="" className="inputCheck__icon" />
            )}
            {errors.userName && !shouldShowCorrectIcons("userName") && (
              <img src={incorrect_icon} alt="" className="inputCheck__icon" />
            )}
            <input
              type="text"
              {...register("userName", {
                required: true,
                maxLength: 15,
                minLength: 5,
                pattern: /^[a-zA-Z0-9_.-]+$/,
              })}
              placeholder="Nombre de Usuario"
              className="signIn__input"
            />
          </div>
          {errors.userName && (
            <span className="spanWatch">
              {errors.userName?.type === "required" && <p>Obligatorio.</p>}
              {errors.userName?.type === "maxLength" && (
                <p>15 caracteres max.</p>
              )}
              {errors.userName?.type === "minLength" && (
                <p>5 caracteres min.</p>
              )}
              {errors.userName?.type === "pattern" && (
                <p>
                  Solo puede contener letras, números, guiones bajos, puntos y
                  guiones.
                </p>
              )}
            </span>
          )}
        </div>

        {/* --------------Email-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("email") && (
              <img src={correct_icon} alt="" className="inputCheck__icon" />
            )}
            {errors.email && !shouldShowCorrectIcons("email") && (
              <img src={incorrect_icon} alt="" className="inputCheck__icon" />
            )}
            <input
              type="text"
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
              placeholder="Email"
              className="signIn__input"
            />
          </div>
          {errors.email && (
            <span className="spanWatch">
              {errors.email?.type === "required" && <p>Obligatorio.</p>}
              {errors.email?.type === "validate" && (
                <p>Formato de email incorrecto.</p>
              )}
            </span>
          )}
        </div>

        {/* --------------Password-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("password") && (
              <img src={correct_icon} alt="" className="inputCheck__icon" />
            )}
            {errors.password && !shouldShowCorrectIcons("password") && (
              <img src={incorrect_icon} alt="" className="inputCheck__icon" />
            )}
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              placeholder="Contraseña"
              className="signIn__input"
            />
            <img
              src={question_mark_icon}
              alt=""
              className="question_mark_icon"
            />
            <span className="question_mark_icon-text">
              Las contraseñas se encriptan para garantizar mayor seguridad.
            </span>
          </div>

          {errors.password && (
            <span className="spanWatch">
              {errors.password?.type === "required" && <p>Obligatorio.</p>}
              {errors.password?.type === "minLength" && (
                <p>Mínimo 8 caracteres.</p>
              )}
            </span>
          )}
        </div>

        {/* --------------Confirm Password-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("confirmPassword") && (
              <img src={correct_icon} alt="" className="inputCheck__icon" />
            )}
            {errors.confirmPassword &&
              !shouldShowCorrectIcons("confirmPassword") && (
                <img src={incorrect_icon} alt="" className="inputCheck__icon" />
              )}
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password.current,
              })}
              placeholder="Confirmar Contraseña"
              className="signIn__input"
            />
          </div>
          {errors.confirmPassword && (
            <span className="spanWatch">
              {errors.confirmPassword?.type === "required" && (
                <p>Obligatorio.</p>
              )}
              {errors.confirmPassword?.type === "validate" && (
                <p>Las contraseñas no coinciden.</p>
              )}
            </span>
          )}
        </div>
        {/* --------------Button-------------- */}
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <div className="button__create-container">
            {isLoading ? (
              <img src={loading_icon} alt="" className="button__loadingIcon" />
            ) : (
              <input type="submit" value="Crear" className="boton" />
            )}
          </div>
        </motion.div>
        {/* --------------CreateAccount-------------- */}
        <span
          className={`responseMessage__title ${
            responseMessage ? "responseMessage__title-active" : ""
          }`}
        >
          {responseMessage}
        </span>
      </form>
    </div>
  );
};

export default SignIn;
