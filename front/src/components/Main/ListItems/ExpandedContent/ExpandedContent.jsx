import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ExpandedContent.css";
import { imagenes } from "../../../../assets";
import { useIconsStore } from "../../../../store/ui_icons_store";
import { motion } from "framer-motion";

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
      <div className="slider__container-expandedContent">
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
          className="swiperComponent__container-expandedContent"
        >
          {algunas.map((imagen, index) => (
            <SwiperSlide key={index}>
              <img src={imagen} alt="" className="imageTest" />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        <div className="titleAndDownload__container">
          <div className="expandedContent__title-container">
            <h1 className="expandedContent__title">House Polka Sesnotak </h1>
          </div>
          <div className="buttonsExpandedContent__container">
            <div className="buttonSmall__container">
              <button className="expandedContent__button">
                <img
                  src={ui_icons.star_icon_amarillo}
                  alt=""
                  className="expandedContent__img"
                />
              </button>
              <button className="expandedContent__button">
                <img
                  src={ui_icons.report_icon_amarillo}
                  alt=""
                  className="expandedContent__img"
                />
              </button>
              <button className="expandedContent__button">
                <img
                  src={ui_icons.share_icon_amarillo}
                  alt=""
                  className="expandedContent__img"
                />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <button className="expandedContent__button-download">
                Download
              </button>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedContent;
