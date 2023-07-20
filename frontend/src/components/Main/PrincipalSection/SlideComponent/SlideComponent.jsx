import "./SlideComponent.css";
import { imagenes } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useIconsStore } from "../../../../store/ui_icons_store";

const SlideComponent = () => {
  const { ui_icons } = useIconsStore();

  const data = [
    {
      title: "Jhon deere 730 1990 Version Argentine",
      compatibity: ["PC", "Console"],
      date: "23/05/23",
      version: "1.2.0",
      downloads: 3651,
      image: imagenes[0],
      stars: 2.5,
    },
    {
      title: "Massey Fergusson 2020",
      compatibity: ["PC"],
      date: "16/01/23",
      version: "1.0.0",
      downloads: 613,
      image: imagenes[1],
      stars: 4.5,
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[2],
      stars: 4.2,
    },
    {
      title: "Jhon Deere X16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[3],
      stars: 3.9,
    },
    {
      title: "Harvester Old Antique 1970",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[4],
      stars: 4,
    },
    {
      title: "Fence Wood Storm",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[5],
      stars: 3.9,
    },
    {
      title: "House Polka Wola",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[6],
      stars: 4.7,
    },
  ];

  return (
    <Swiper
      speed={1000}
      effect="fade"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      fadeEffect={{ crossFade: true }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectFade]}
      className="slideComponent__container"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt="" className="mod__image-principal" />
          <div className="stats__container-principal">
            <span className="mod__title__principal">{item.title}</span>

            <div className="mod__stats-container__principal">
              <div className="mod__stat-container">
                <img
                  src={ui_icons.date_icon_amarillo}
                  alt=""
                  className="mod__icon-stat"
                />
                <span className="mod__title-stat">{item.date}</span>
              </div>

              <div className="line__decorative"></div>

              <div className="mod__stat-container">
                <img
                  src={ui_icons.version_icon_amarillo}
                  alt=""
                  className="mod__icon-stat"
                />
                <span className="mod__title-stat">{item.version}</span>
              </div>

              <div className="line__decorative"></div>

              <div className="mod__stat-container">
                <img
                  src={ui_icons.pc_icon_amarillo}
                  alt=""
                  className="mod__icon-stat"
                />
                <img
                  src={ui_icons.console_icon}
                  alt=""
                  className="mod__icon-stat"
                />
              </div>

              <div className="line__decorative"></div>

              <div className="mod__stat-container">
                <img
                  src={ui_icons.download_icon_amarillo}
                  alt=""
                  className="mod__icon-stat"
                />
                <span className="mod__title-stat">{item.downloads}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideComponent;
