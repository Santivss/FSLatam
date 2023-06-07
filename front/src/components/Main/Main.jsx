import "./Main.css";
import Filters from "./Filters/Filters";
import Slider from "./Slider/Slider";
import { imagenes } from "../../assets";
import ListItems from "./ListItems/ListItems";

export const Main = () => {
  return (
    <main className="main">
      <Slider />
      <div className="filters-container">
        <Filters />
      </div>
      <div className="list-items-container">
        <ListItems image={imagenes[0]} />
        <ListItems image={imagenes[1]} />
        <ListItems image={imagenes[2]} />
        <ListItems image={imagenes[3]} />
        <ListItems image={imagenes[4]} />
        <ListItems image={imagenes[5]} />
      </div>
    </main>
  );
};
