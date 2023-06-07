import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Main />
      <div className="bubbles__container">
        <div class="burbujas"></div>
        <div class="burbujas2"></div>
      </div>
    </div>
  );
};
