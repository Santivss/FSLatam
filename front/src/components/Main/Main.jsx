import React from "react";
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
      </div>
    </main>
  );
};
