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
        <ListItems image={imagenes[1]} />
        <ListItems image={imagenes[2]} />
        <ListItems image={imagenes[3]} />
        <ListItems image={imagenes[4]} />
        <ListItems image={imagenes[5]} />
        <ListItems image={imagenes[6]} />
        <ListItems image={imagenes[7]} />
        <ListItems image={imagenes[8]} />
        <ListItems image={imagenes[9]} />
        <ListItems image={imagenes[10]} />
        <ListItems image={imagenes[11]} />
        <ListItems image={imagenes[12]} />
        <ListItems image={imagenes[13]} />
      </div>
    </main>
  );
};
