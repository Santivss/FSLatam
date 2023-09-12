import React, { useEffect } from "react";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import axios from "axios";
import { firstRequestData } from "../../store/firstRequestInformation";
import { userInfoStore } from "../../store/userInfoStore";
import MenuCenterMobile from "../../components/MenuCenterMobile/MenuCenterMobile";

export const Home = () => {
  const { setCategories } = firstRequestData();
  const {
    isAuthenticated,
    userId,
    setUserIicon,
    setEmail,
    setCountMods,
    setUserName,
  } = userInfoStore();

  useEffect(() => {
    axios
      .get("https://fslatam-back.onrender.com/api/modsCount")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isAuthenticated && userId) {
    useEffect(() => {
      axios
        .get(`https://fslatam-back.onrender.com/api/userData/${userId}`)
        .then((res) => {
          setCountMods(res.data.userData.countMods);
          setUserIicon(res.data.userData.user_icon);
          setEmail(res.data.userData.email);
          setUserName(res.data.userData.user_name);
        })
        .catch((err) => console.log(err));
    }, []);
  }

  return (
    <>
      <div className="home">
        <Nav />
        <Header />
        <Main />
        <MenuCenterMobile />

        <div className="bubbles__container">
          <div className="burbujas"></div>
          <div className="burbujas2"></div>
          <div className="burbujas3"></div>
        </div>
      </div>
    </>
  );
};
