import { useEffect, useState } from "react";
import "./InputVersion.css";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";
import { useRef } from "react";

const InputVersion = ({ handleVersionData, titleEmptyAlertStatus }) => {
  const titleRef = useRef();

  useEffect(() => {
    if (titleEmptyAlertStatus) {
      titleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [titleEmptyAlertStatus]);

  const [switchState, setSwitchState] = useState(null);
  const [titleInputValue, setTitleInputValue] = useState(null);

  const [errorMessageTitle, setErrorMessageTitle] = useState(false);

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

  /* Pasar la data al father */

  useEffect(() => {
    const first = firstNumber !== "" ? parseInt(firstNumber) : 1;
    const second = secondNumber !== "" ? parseInt(secondNumber) : 0;
    const third = thirdNumber !== "" ? parseInt(thirdNumber) : 0;

    const versionData = switchState ? { beta: true } : [first, second, third];

    handleVersionData(titleInputValue, versionData);
  }, [firstNumber, secondNumber, thirdNumber, switchState, titleInputValue]);

  /* ----------------------- */

  const handleSwitchChange = (isOn) => {
    setSwitchState(isOn);
  };

  const handleInputChange = (event) => {
    setTitleInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === " " && event.target.selectionStart === 0) {
      event.preventDefault();
    }
  };
  return (
    <div className="uploadMod__title-version__container">
      {/* ------------uploadMod__title-container------------ */}

      <div className="uploadMod__title-container">
        <span className="uploadmod__title">Título</span>
        <input
          ref={titleRef}
          type="input"
          className={`uploadmodinput__title ${
            titleEmptyAlertStatus ? "titleAlertBorder" : ""
          }`}
          maxLength={50}
          placeholder="Title mod"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {errorMessageTitle ? (
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
