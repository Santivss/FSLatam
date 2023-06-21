import "./SlideComponent.css";
import { imagenes } from "../../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SlideComponent = () => {
  const data = [
    {
      title: "Jhon deere 730",
      compatibity: ["PC", "Console"],
      date: "23/05/23",
      version: "1.2.0",
      downloads: 3651,
      image: imagenes[0],
    },
    {
      title: "Massey Fergusson 2020",
      compatibity: ["PC"],
      date: "16/01/23",
      version: "1.0.0",
      downloads: 613,
      image: imagenes[1],
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[2],
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[3],
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[4],
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[5],
    },
    {
      title: "Case Storm 16",
      compatibity: ["PC", "Console"],
      date: "28/09/23",
      version: "1.0.0",
      downloads: 6423,
      image: imagenes[6],
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
              <div>
                <span>{item.date}</span>
              </div>

              <div>
                <span>{item.downloads}</span>
              </div>

              <div>
                <span>{item.version}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideComponent;
