import { Categories } from "./Categories/Categories";
import { Levels } from "./Levels/Levels";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav__container">
      <Levels />
      <Categories />
    </nav>
  );
};

export default Nav;
