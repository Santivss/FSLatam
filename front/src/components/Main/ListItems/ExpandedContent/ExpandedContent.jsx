import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ExpandedContent.css";
import { imagenes } from "../../../../assets";
import { useIconsStore } from "../../../../store/ui_icons_store";

const ExpandedContent = () => {
  const { ui_icons } = useIconsStore();

  const algunas = [
    imagenes[0],
    imagenes[1],
    imagenes[2],
    imagenes[3],
    imagenes[4],
    imagenes[5],
  ];

  return (
    <div className="expandedContent__container">
      <div className="slider__container2">
        <Swiper
          speed={1000}
          effect="fade"
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
          className="swiperComponent__container2"
        >
          {algunas.map((imagen, index) => (
            <SwiperSlide key={index}>
              <img src={imagen} alt="" className="imageTest" />
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
    </div>
  );
};

export default ExpandedContent;
