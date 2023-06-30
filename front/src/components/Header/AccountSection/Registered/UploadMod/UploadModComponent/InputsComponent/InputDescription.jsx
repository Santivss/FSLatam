import { useState } from "react";
import "./InputDescription.css";

const InputDescription = () => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const characterCount = description.length;
  const maxLength = 4000;

  return (
    <div className="uploadMod__description-container">
      <span className="uploadModDescription__title">Description</span>
      <textarea
        className="uploadMod__descripton-input"
        rows="4"
        maxLength="4000"
        placeholder="4000 caracteres max."
        style={{ resize: "none" }}
        value={description}
        onChange={handleChange}
      ></textarea>
      <span className="characterCount">
        {characterCount}/{maxLength} caracteres
      </span>
    </div>
  );
};

export default InputDescription;
