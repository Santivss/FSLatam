import React, { useState } from "react";
import "./MyAccountBanner.css";
import banner_image from "../../../../../../../../assets/banner_image.png";
import change_image_icon from "../../../../../../../../assets/uiIcons/change_image_icon.svg";

const MyAccountBanner = () => {
  const [selectedImage, setSelectedImage] = useState(banner_image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Verificar si se seleccionó un archivo
    if (file) {
      // Verificar el tipo de archivo (imagen)
      if (!file.type.startsWith("image/")) {
        alert("Por favor, seleccione una imagen válida.");
        return;
      }

      // Crear una nueva imagen para obtener las dimensiones
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        // Verificar las dimensiones (1280x360)
        if (img.width !== 1280 || img.height !== 360) {
          alert(
            "La imagen seleccionada debe tener una resolución de 1280x360."
          );
          return;
        }

        // Verificar el tamaño máximo (en bytes)
        const maxSize = 3 * 1024 * 1024; // 5 MB
        if (file.size > maxSize) {
          alert(
            "La imagen seleccionada es demasiado grande. El tamaño máximo permitido es 5 MB."
          );
          return;
        }

        // Si todas las validaciones pasan, leer la imagen y actualizar el estado
        const reader = new FileReader();

        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(file);
      };
    }
  };

  return (
    <div className="bannerImage__container">
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="inputImagen"
        onChange={handleImageChange}
      />
      <label htmlFor="inputImagen" className="banner__image-label">
        <img src={selectedImage} alt="banner_image" className="banner__image" />
      </label>
      <img className="elemento-hover" src={change_image_icon} alt="" />
    </div>
  );
};

export default MyAccountBanner;
