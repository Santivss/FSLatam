import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import axios from "axios";
import { firstRequestData } from "../../store/firstRequestInformation";
import { userInfoStore } from "../../store/userInfoStore";
import MenuCenterMobile from "../../components/MenuCenterMobile/MenuCenterMobile";
import { menuContainersStore } from "../../store/menuContainersStore";

export const Home = () => {
  const { navContainerStatus, setNavContainerStatus } = menuContainersStore();

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
      .get("https://crowded-cyan-newt.cyclic.cloud/api/modsCount")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isAuthenticated && userId) {
    useEffect(() => {
      axios
        .get(`https://crowded-cyan-newt.cyclic.cloud/api/userData/${userId}`)
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
        <MenuCenterMobile setNavContainerStatus={setNavContainerStatus} />
        <Nav
          navContainerStatus={navContainerStatus}
          setNavContainerStatus={setNavContainerStatus}
        />
        <Header />
        <Main />
        <div className="bubbles__container">
          <div className="burbujas"></div>
          <div className="burbujas2"></div>
          <div className="burbujas3"></div>
        </div>
      </div>
    </>
  );
};
