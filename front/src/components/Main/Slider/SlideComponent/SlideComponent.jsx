import { useIconsStore } from "../../../../store/ui_icons_store";

import "./SlideComponent.css";

const SlideComponent = ({ data }) => {
  const { ui_icons } = useIconsStore();

  return (
    <div className="slide__container">
      <div className="image__slide-container">
        <img src={data} alt="" className="image__slide" />
      </div>
      <div className="stats__container">
        <h4 className="title__mod">Mixer Lizard 3040XL</h4>
        <div className="downloads__container">
          <div className="downloads__stats-container">
            <h5 className="downloads__count-number">1689</h5>
            <img
              src={ui_icons.download_icon}
              alt=""
              className="downloads__icon"
            />
          </div>

          <div className="compatibility__icon-container">
            <img
              src={ui_icons.pc_icon}
              alt=""
              className="pc__icon compatibility__icon"
            />
            <img
              src={ui_icons.pc_icon}
              alt=""
              className="console__icon compatibility__icon"
            />
          </div>
        </div>
        <div className="dateVersion__container">
          <h4 className="date__title">23 May 2023</h4>
          <h4 className="version__title">(1.0.1)</h4>
        </div>
      </div>
      <div className="stars__container">
        <img src={ui_icons.star_icon_stroke} alt="" className="star__icon" />
        <h3>4.5</h3>
      </div>
    </div>
  );
};

export default SlideComponent;
