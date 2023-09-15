import { Categories } from "./Categories/Categories";
import { Levels } from "./Levels/Levels";
import "./Nav.css";
import { userInfoStore } from "../../store/userInfoStore";
import { menuContainersStore } from "../../store/menuContainersStore";

const Nav = () => {
  const { navContainerStatus, setNavContainerStatus } = menuContainersStore();

  const { isAuthenticated } = userInfoStore();

  return (
    <nav className={`nav__container ${navContainerStatus ? "nc-active" : ""}`}>
      {isAuthenticated ? <Levels /> : null}

      <Categories setNavContainerStatus={setNavContainerStatus} />
    </nav>
  );
};

export default Nav;
