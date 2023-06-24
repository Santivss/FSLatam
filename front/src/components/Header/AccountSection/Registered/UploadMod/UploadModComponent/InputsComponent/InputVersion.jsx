import { useState } from "react";
import "./InputVersion.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";

const InputVersion = () => {
  const { ui_icons } = useIconsStore();
  const [switchState, setSwitchState] = useState(null);

  const [first, setfirst] = useState(false);

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");

  const handleFirstNumberChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    setFirstNumber(value);
  };

  const handleSecondNumberChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    setSecondNumber(value);
  };

  const handleThirdNumberChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    setThirdNumber(value);
  };

  const version = `${firstNumber}${
    secondNumber !== "" ? `.${secondNumber}` : ""
  }${thirdNumber !== "" ? `.${thirdNumber}` : ""}`;

  /* ----------------------- */

  const handleSwitchChange = (isOn) => {
    setSwitchState(isOn);
  };

  return (
    <div className="uploadMod__title-version__container">
      {/* ------------uploadMod__title-container------------ */}

      <div className="uploadMod__title-container">
        <span className="uploadmod__title">Título</span>
        <input type="input" className="uploadmodinput__title" />
        {first ? (
          <span className="uploadmod__errormessage-title">
            mensaje de error
          </span>
        ) : null}
      </div>

      {/* ------------uploadMod__version-container------------ */}

      <div className="uploadMod__version-container">
        <span className="uploadmod__version">Versión</span>
        <input
          type="text"
          className={`uploadmodinput__version ${
            switchState ? "uploadMod__versionInput-toggle" : ""
          }`}
          value={firstNumber}
          onChange={handleFirstNumberChange}
          maxLength={1}
          placeholder="1"
        />
        <span>.</span>
        <input
          type="text"
          className={`uploadmodinput__version ${
            switchState ? "uploadMod__versionInput-toggle" : ""
          }`}
          value={secondNumber}
          onChange={handleSecondNumberChange}
          maxLength={1}
          placeholder="0"
        />
        <span>.</span>
        <input
          type="text"
          className={`uploadmodinput__version ${
            switchState ? "uploadMod__versionInput-toggle" : ""
          }`}
          value={thirdNumber}
          onChange={handleThirdNumberChange}
          maxLength={1}
          placeholder="0"
        />
        {first ? (
          <span className="uploadmod__errormessage-version">
            mensaje de error
          </span>
        ) : null}
      </div>

      {/* ------------uploadMod__beta-container------------ */}

      <div className="uploadMod__beta-container">
        <span className="uploadMod__input-title">Beta</span>
        <SwitchAnimated onSwitchChange={handleSwitchChange} />
      </div>
    </div>
  );
};

export default InputVersion;
