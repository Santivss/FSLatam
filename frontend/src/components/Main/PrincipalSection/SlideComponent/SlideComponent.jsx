import "./SlideComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import date_icon_amarillo from "../../../../assets/uiIcons/date_icon_amarillo.svg";
import pc_icon_amarillo from "../../../../assets/uiIcons/pc_icon_amarillo.svg";
import console_icon_amarillo from "../../../../assets/uiIcons/console_icon_amarillo.svg";
import loading_icon from "../../../../assets/uiIcons/loading_icon.svg";
import download_icon_amarillo from "../../../../assets/uiIcons/download_icon_amarillo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import ToggleComponent from "../../../../utils/ToggleComponent";
import ExpandedContent from "../../ListItems/ExpandedContent/ExpandedContent";

const SlideComponent = () => {
  const [dataMod, setDataMod] = useState(null);
  const [modSelectedId, setModSelectedId] = useState(null);

  const formatNumber = (num) => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      const thousands = (num / 1000).toFixed(1);
      return `${thousands}K`;
    } else {
      const millions = (num / 1000000).toFixed(1);
      return `${millions}M`;
    }
  };

  const formatDate = (isolate) => {
    const date = new Date(isolate);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(options);
  };

  useEffect(() => {
    axios
      .get("https://fslatam-back.onrender.com/api/sliderMods")
      .then((res) => {
        setDataMod(res.data.mods);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <ToggleComponent
      children={<ExpandedContent dataModSelected={modSelectedId} />}
      buttonText={
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
          className="slideComponent__container"
        >
          {dataMod ? (
            <>
              {dataMod?.map((item) => (
                <SwiperSlide key={item.mod_id}>
                  <img
                    src={`data:image/jpeg;base64, ${item.image}`}
                    alt=""
                    className="mod__image-principal"
                    onClick={() => {
                      setModSelectedId(item.mod_id);
                    }}
                  />

                  <div className="stats__container-principal">
                    <span className="mod__title__principal">
                      {item.mod_title}
                    </span>

                    <div className="mod__stats-container__principal">
                      <div className="mod__stat-container">
                        <img
                          src={date_icon_amarillo}
                          alt=""
                          className="mod__icon-stat"
                        />
                        <span className="mod__title-stat">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>

                      <div className="line__decorative"></div>

                      <div className="mod__stat-container">
                        {item.consoles ? (
                          <img
                            src={console_icon_amarillo}
                            alt=""
                            className="mod__icon-stat"
                          />
                        ) : null}
                        {item.pc ? (
                          <img
                            src={pc_icon_amarillo}
                            alt=""
                            className="mod__icon-stat"
                          />
                        ) : null}
                      </div>

                      <div className="line__decorative"></div>

                      <div className="mod__stat-container">
                        <img
                          src={download_icon_amarillo}
                          alt="download_icon_amarillo"
                          className="mod__icon-stat"
                        />
                        <span className="mod__title-stat">
                          {formatNumber(item.downloadsCount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <img
              src={loading_icon}
              alt="loading_icon"
              className="slideComponent__loadingIcon"
            />
          )}
        </Swiper>
      }
    ></ToggleComponent>
  );
};

export default SlideComponent;
