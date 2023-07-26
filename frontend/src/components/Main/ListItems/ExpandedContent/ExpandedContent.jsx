import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ExpandedContent.css";
import { imagenes } from "../../../../assets";
import TitleAndDownload from "./TitleAndDownload/TitleAndDownload";
import CreatorInformation from "./CreatorInformation/CreatorInformation";
import Description from "./Description/Description";
import Comments from "./Comments/Comments";
import RelatedMods from "./RelatedMods/RelatedMods";

const ExpandedContent = () => {
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
        <TitleAndDownload />
        <CreatorInformation />
        <Description />
        <Comments />
        <RelatedMods />
      </div>
    </div>
  );
};

export default ExpandedContent;
