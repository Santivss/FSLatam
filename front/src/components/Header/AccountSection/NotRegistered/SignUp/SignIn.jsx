import "./SignIn.css";
import axios from "axios";
import { useForm } from "react-hook-form";

/* "http://localhost:3000/api/testUsers" */

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signIn__container">
      <span>{watch("fullName")}</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signInElements__container"
      >
        <span className="signIn__title">Register</span>
        <div>
          <input
            type="text"
            {...register("fullName", {
              required: true,
              maxLength: 20,
            })}
            placeholder="Full name"
            className="signIn__input"
          />
          {errors.fullName?.type === "maxLength" && (
            <p>El nombre no puede tener mas de 20 caracteres!</p>
          )}
        </div>
        <input
          type="text"
          {...register("username", {
            required: true,
          })}
          placeholder="Username"
          className="signIn__input"
        />

        {/* ----------Email---------- */}

        <input
          type="text"
          {...register("email", {
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          })}
          placeholder="Email"
          className="signIn__input"
        />

        {errors.email?.type === "pattern" && <p>Formato de email icorrecto!</p>}

        {/* ----------Email---------- */}
        <input
          type="text"
          {...register("password")}
          placeholder="Password"
          className="signIn__input"
        />
        <input
          type="text"
          {...register("confirmPassword")}
          placeholder="Confirm Password"
          className="signIn__input"
        />

        <input type="submit" value="enviar" className="boton" />
      </form>
    </div>
  );
};

export default SignIn;
