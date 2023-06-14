import React from "react";
import "./SignIn.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../../../store/ui_icons_store";
import validator from "validator";

const SignIn = () => {
  const { ui_icons } = useIconsStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  // Objeto para almacenar los errores de los campos
  const inputErrors = {
    fullName: errors.fullName,
    userName: errors.userName,
    email: errors.email,
    password: errors.password,
    confirmPassword: errors.confirmPassword,
  };

  // Verificar si se deben mostrar los iconos correctos
  const shouldShowCorrectIcons = (fieldName) => {
    return !!watch(fieldName) && !inputErrors[fieldName] && !errors[fieldName];
  };

  return (
    <div className="signIn__container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signInElements__container"
      >
        <span className="signIn__title">Crear una cuenta</span>
        {/* --------------Fullname-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("fullName") && (
              <img
                src={ui_icons.correct_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}
            {errors.fullName && (
              <img
                src={ui_icons.incorrect_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}

            <input
              type="text"
              {...register("fullName", {
                required: true,
                maxLength: 30,
                minLength: 5,
                pattern: /^[A-Za-z\s]+$/,
              })}
              placeholder="Nombre completo"
              className="signIn__input"
            />
          </div>
          {errors.fullName && (
            <span className="spanWatch">
              {errors.fullName?.type === "required" && <p>Obligatorio.</p>}
              {errors.fullName?.type === "maxLength" && (
                <p>30 caracteres max.</p>
              )}
              {errors.fullName?.type === "minLength" && (
                <p>5 caracteres min.</p>
              )}
              {errors.fullName?.type === "pattern" && (
                <p>Solo se permiten letras.</p>
              )}
            </span>
          )}
        </div>

        {/* --------------UserName-------------- */}
        <div className="input__container">
          <div className="input-wrapper">
            {shouldShowCorrectIcons("userName") && (
              <img
                src={ui_icons.correct_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}
            {errors.userName && (
              <img
                src={ui_icons.incorrect_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}

            <input
              type="text"
              {...register("userName", {
                required: true,
                maxLength: 15,
                minLength: 5,
                pattern: /^[a-zA-Z0-9_.-]+$/,
              })}
              placeholder="Usuario"
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
              <img
                src={ui_icons.correct_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}
            {errors.email && (
              <img
                src={ui_icons.incorrect_icon}
                alt=""
                className="inputCheck__icon"
              />
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
              <img
                src={ui_icons.correct_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}
            {errors.password && (
              <img
                src={ui_icons.incorrect_icon}
                alt=""
                className="inputCheck__icon"
              />
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
              <img
                src={ui_icons.correct_icon}
                alt=""
                className="inputCheck__icon"
              />
            )}
            {errors.confirmPassword && (
              <img
                src={ui_icons.incorrect_icon}
                alt=""
                className="inputCheck__icon"
              />
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
          <input type="submit" value="Crear Cuenta" className="boton" />
        </motion.div>
        {/* --------------CreateAccount-------------- */}
      </form>
    </div>
  );
};

export default SignIn;
