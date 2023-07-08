import React, { useState, useRef } from "react";
import "./ImagesUpLoad.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";

const ImagesUpLoad = () => {
  const { ui_icons } = useIconsStore();
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const imageCountRef = useRef(0);
  const maxImages = 5;
  const allowedExtensions = [".jpg", ".png"];

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageArray = [];

    const remainingSlots = maxImages - selectedImages.length;
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
        setErrorMessage(`El formato es incorrecto`);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    }

    setSelectedImages((prevImages) => [
      ...prevImages,
      ...imageArray.slice(0, remainingSlots),
    ]);
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
        <div className="imagesUpLoad__input-container">
          <div className="imagesUpLoad__title-button__container">
            {errorMessage ? (
              <p className="error-message">{errorMessage}</p>
            ) : (
              <span className="imagesUpLoad__title-button">
                Click o Arrastrar y soltar.
              </span>
            )}
          </div>
          <input
            type="file"
            accept=".jpg, .png"
            multiple
            onChange={handleImageChange}
            className="imagesUpLoad__input"
          />
        </div>
      )}
      <div className="imagesUpLoad__container-img">
        {selectedImages.map((image, index) => (
          <div className="imagePreview__container">
            <img
              key={index}
              src={image.imageURL}
              alt={`Selected ${index + 1}`}
              className="imagesUpLoad__image"
            />
            <img
              src={ui_icons.incorrect_icon}
              alt=""
              onClick={() => handleImageDelete(index)}
              className="deleteImage__icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesUpLoad;
