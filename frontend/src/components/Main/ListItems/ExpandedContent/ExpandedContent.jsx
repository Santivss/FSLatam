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
import return_icon from "../../../../assets/uiIcons/return_icon.svg";

const ExpandedContent = ({ dataModSelected, setUnmountExpandedContent }) => {
  const [fullDataMod, setFullDataMod] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://fslatam-back.onrender.com/api/modFullData/${dataModSelected}`
      )
      .then((res) => {
        setFullDataMod(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="expandedContent__container">
      <button
        className="expandedContentBtn__close"
        onClick={() => {
          setUnmountExpandedContent((prevState) => !prevState);
        }}
      >
        <img
          src={return_icon}
          alt="return_icon"
          className="expandedContentBtn__return-img"
        />
      </button>
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
      <CreatorInformation fullDataMod={fullDataMod?.fullDataMod} />
      <Description fullDataMod={fullDataMod?.fullDataMod} />
    </div>
  );
};

export default ExpandedContent;
