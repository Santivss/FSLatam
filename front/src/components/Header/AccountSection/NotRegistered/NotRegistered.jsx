import "./NotRegistered.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignIn";
import ToggleComponent from "../../../../utils/ToggleComponent";

const NotRegistered = () => {
  function renderComponent(component) {
    return (
      <ToggleComponent buttonText={component.buttonText}>
        {component.component}
      </ToggleComponent>
    );
  }
  return (
    <div className="notRegistered__container">
      <div className="login__container-button">
        {renderComponent({ buttonText: "Login", component: <Login /> })}
      </div>
      <div className="signIn__container-button">
        {renderComponent({ buttonText: "SignUp", component: <SignUp /> })}
      </div>
    </div>
  );
};

export default NotRegistered;
