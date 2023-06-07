import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { imagenes } from "../../../assets/index";
import { icons } from "../../../assets/uiIcons";
import SlideComponent from "./SlideComponent/SlideComponent";

const Slider = () => {
  return (
    <div className="swiper__container">
      <h2 className="slider__title">Features</h2>
      <Swiper
        speed={1000}
        effect="fade" // Cambia el efecto a "fade"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={0}
        fadeEffect={{ crossFade: true }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="swiperComponent__container"
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <SlideComponent data={imagen} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <img
            src={icons[0].icon}
            alt=""
            className="swiper-button-prev slider-arrow arrow-back-outline"
          />
          {/* -------------------------- */}
          <img
            src={icons[1].icon}
            alt=""
            className="swiper-button-next slider-arrow arrow-forward-outline"
          />

          {/* -------------------------- */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
