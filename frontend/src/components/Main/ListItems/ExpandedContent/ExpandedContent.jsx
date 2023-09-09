import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "./ExpandedContent.css";
import TitleAndDownload from "./TitleAndDownload/TitleAndDownload";
import CreatorInformation from "./CreatorInformation/CreatorInformation";
import Description from "./Description/Description";
import Comments from "./Comments/Comments";
import RelatedMods from "./RelatedMods/RelatedMods";
import axios from "axios";
import { useEffect, useState } from "react";
import loading_icon from "../../../../assets/uiIcons/loading_icon.svg";

const ExpandedContent = ({ dataModSelected }) => {
  const [fullDataMod, setFullDataMod] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/modFullData/${dataModSelected}`)
      .then((res) => {
        setFullDataMod(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="expandedContent__container">
      <Swiper
        speed={2000}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        modules={[Autoplay, EffectFade]}
        className="swiperComponent__container-expandedContent"
      >
        {fullDataMod ? (
          <>
            {fullDataMod?.images.map((item) => (
              <SwiperSlide key={item.name}>
                <img
                  src={`data:image/jpeg;base64,${item.content}`}
                  alt={item.name}
                  className="expandedContent__imageMod"
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <img
            src={loading_icon}
            alt="loading_icon"
            className="expandedContent__loadingIcon"
          />
        )}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <TitleAndDownload fullDataMod={fullDataMod?.fullDataMod.mod_title} />
      <CreatorInformation />
      <Description />
      <Comments />
      <RelatedMods />
    </div>
  );
};

export default ExpandedContent;
