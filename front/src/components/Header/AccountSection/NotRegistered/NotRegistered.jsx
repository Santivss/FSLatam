import React from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ToggleComponent from "../../../../utils/ToggleComponent";

const NotRegistered = () => {
  return (
    <div className="notRegistered__container">
      <ToggleComponent buttonText="Login">
        <Login />
      </ToggleComponent>
      <ToggleComponent buttonText="SignUp">
        <SignUp />
      </ToggleComponent>
    </div>
  );
};

export default NotRegistered;
