import React, { useEffect } from "react";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import axios from "axios";
import { firstRequestData } from "../../store/firstRequestInformation";

export const Home = () => {
  const { setCategories } = firstRequestData();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="home">
        <Nav />
        <Header />
        <Main />
        <div className="bubbles__container">
          <div className="burbujas"></div>
          <div className="burbujas2"></div>
        </div>
      </div>
    </>
  );
};
