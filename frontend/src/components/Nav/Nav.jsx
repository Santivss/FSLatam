import { Categories } from "./Categories/Categories";
import { Levels } from "./Levels/Levels";
import { SocialsMedia } from "./SocialsMedia/SocialsMedia";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav__container">
      <Levels />
      <Categories />
      <SocialsMedia />
    </nav>
  );
};

export default Nav;
