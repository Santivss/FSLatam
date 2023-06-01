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
    </div>
  );
};
