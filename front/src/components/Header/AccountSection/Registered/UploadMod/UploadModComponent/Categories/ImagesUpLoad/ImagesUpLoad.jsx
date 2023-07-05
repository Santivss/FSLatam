import React, { useState, useRef } from "react";
import "./ImagesUpLoad.css";

const ImagesUpLoad = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const imageCountRef = useRef(0);
  const maxImages = 5;
  const allowedExtensions = [".jpg", ".png"];

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageArray = [];

    const remainingSlots = maxImages - imageCountRef.current;
    const numImagesToAdd = Math.min(remainingSlots, files.length);

    if (numImagesToAdd === 0) {
      setErrorMessage(`You can only upload up to ${maxImages} images.`);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    for (let i = 0; i < numImagesToAdd; i++) {
      const file = files[i];
      const extension = file.name
        .substring(file.name.lastIndexOf("."))
        .toLowerCase();
      if (allowedExtensions.includes(extension)) {
        const imageURL = URL.createObjectURL(file);
        imageArray.push({ file, imageURL });
        imageCountRef.current += 1;
      } else {
        setErrorMessage(`Invalid file format: ${file.name}`);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    }

    setSelectedImages((prevImages) => [...prevImages, ...imageArray]);
  };

  const handleImageDelete = (index) => {
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages];
      const deletedImage = updatedImages.splice(index, 1)[0];
      URL.revokeObjectURL(deletedImage.imageURL);
      imageCountRef.current -= 1;
      return updatedImages;
    });
  };

  const handleReset = () => {
    setSelectedImages([]);
    imageCountRef.current = 0;
    setErrorMessage("");
  };

  return (
    <div className="imagesUpLoad__container">
      <div className="imagesUpLoad__conditions-container">
        <span className="imagesUpLoad__title">Imágenes</span>
        <span className="imagesConditions__title">Máx 5 imágenes</span>
        <span className="imagesLine"></span>
        <span className="imagesConditions__title">Máx 6MB por imagen</span>
        <span className="imagesLine"></span>
        <span className="imagesConditions__title">
          Resolución de 1280x720, formato png o jpg.
        </span>
      </div>
      {selectedImages.length < maxImages && (
        <input
          type="file"
          accept=".jpg, .png"
          multiple
          onChange={handleImageChange}
          className="imagesUpLoad__input"
        />
      )}
      <div className="imagesUpLoad__container-img">
        {selectedImages.map((image, index) => (
          <>
            <img
              key={index}
              src={image.imageURL}
              alt={`Selected ${index + 1}`}
              className="imagesUpLoad__image"
            />
            <button
              className="imagesUpLoad__delete-button"
              type="button"
              onClick={() => handleImageDelete(index)}
            >
              Delete
            </button>
          </>
        ))}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {selectedImages.length > 0 && (
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ImagesUpLoad;
