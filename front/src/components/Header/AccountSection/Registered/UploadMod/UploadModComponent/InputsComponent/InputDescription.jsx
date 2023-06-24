import "./InputDescription.css";

const InputDescription = () => {
  return (
    <div className="uploadMod__description-container">
      <span className="uploadModDescription__title">Description</span>
      <textarea
        className="uploadMod__descripton-input"
        rows="4"
        maxLength="4000"
        placeholder="4000 caracteres max."
      ></textarea>
    </div>
  );
};

export default InputDescription;
