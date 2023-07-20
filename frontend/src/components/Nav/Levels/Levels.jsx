import "./Levels.css";

export const Levels = () => {
  return (
    <div className="levels__container">
      <h1 className="title">
        <a href="/home">
          <span className="title__fc">FC</span>
          <span className="title__mods">Mods</span>
        </a>
      </h1>
      <div className="levels__section">
        <h4>Level</h4>
        <h4>Money</h4>
      </div>
    </div>
  );
};
