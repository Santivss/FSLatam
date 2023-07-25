import React, { useEffect } from "react";
import "./Main.css";
import Filters from "./Filters/Filters";
import PrincipalSection from "./PrincipalSection/PrincipalSection";
import ListItems from "./ListItems/ListItems";
import axios from "axios";

export const Main = () => {
  /*   useEffect(() => {
    axios
      .get("localhost:3000/api/mods")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  return (
    <main className="main">
      <PrincipalSection />
      <Filters />
      <div className="list-items-container">
        <ListItems />
      </div>
    </main>
  );
};
