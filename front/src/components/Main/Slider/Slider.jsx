import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { imagenes } from "../../../assets/index";
import SlideComponent from "./SlideComponent/SlideComponent";
import { useIconsStore } from "../../../store/ui_icons_store";

const Slider = () => {
  const { ui_icons } = useIconsStore();

  const parteImages = [
    imagenes[0],
    imagenes[1],
    imagenes[2],
    imagenes[3],
    imagenes[4],
  ];

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
        {parteImages.map((imagen, index) => (
          <SwiperSlide key={index}>
            <SlideComponent data={imagen} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <img
            src={ui_icons.piston_icon}
            alt=""
            className="swiper-button-prev slider-arrow arrow-back-outline"
          />
          {/* -------------------------- */}
          <img
            src={ui_icons.piston_icon}
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
