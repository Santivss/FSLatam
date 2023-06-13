import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Loading from "../../components/Loading/Loading";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";

export const Home = () => {
  /* ------------Peticion------------ */

  /* ------------Peticion------------ */

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <>
      {isLoading &&
        ReactDOM.createPortal(
          <Loading />,
          document.getElementById("portal-root")
        )}
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
