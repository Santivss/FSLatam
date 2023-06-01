import "./Slider.css";
import Slideshow from "./Slideshow/Slideshow";
import { imagenes } from "../../../assets/index";

const Slider = () => {
  return (
    <div className="slider__container">
      <Slideshow element={imagenes} />
    </div>
  );
};

export default Slider;
