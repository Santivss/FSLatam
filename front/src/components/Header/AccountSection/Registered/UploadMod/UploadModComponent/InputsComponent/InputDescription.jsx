import { useEffect, useState } from "react";
import "./InputDescription.css";

const InputDescription = ({ handleDescriptionData }) => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.trimStart();
    setDescription(value);
  };

  useEffect(() => {
    handleDescriptionData(description.trim());
  }, [description]);

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
