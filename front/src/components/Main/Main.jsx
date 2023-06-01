import "./Main.css";
import ListItems from "./ListItems/ListItems";
import Filters from "./Filters/Filters";
import Slider from "./Slider/Slider";

export const Main = () => {
  return (
    <main className="main">
      <Slider />
      <div className="filters-container">
        <Filters />
      </div>
      <div className="list-items-container">
        <ListItems />
      </div>
    </main>
  );
};
