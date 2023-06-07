import "./SlideComponent.css";

const SlideComponent = ({ data }) => {
  return (
    <div className="slide__container">
      <div className="image__slide-container">
        <img src={data} alt="" className="image__slide" />
      </div>
      <div className="info">
        <h4>Informacion para toso</h4>
        <h4>Informacion para toso</h4>
        <h4>Informacion para toso</h4>
        <h4>Informacion para toso</h4>
      </div>
    </div>
  );
};

export default SlideComponent;
