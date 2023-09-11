import { Categories } from "./Categories/Categories";
import { Levels } from "./Levels/Levels";
import "./Nav.css";
import { userInfoStore } from "../../store/userInfoStore";
const Nav = () => {
  const { isAuthenticated } = userInfoStore();

  return (
    <nav className="nav__container">
      {isAuthenticated ? <Levels /> : null}
      <Categories />
    </nav>
  );
};

export default Nav;
