import "./Search.css";

import { useIconsStore } from "../../../store/ui_icons_store";

const Search = () => {
  const { ui_icons } = useIconsStore();
  return (
    <div className="search__container">
      <input type="text" placeholder="Search" className="search__input" />
      <button className="btn">Search</button>
      <img src={ui_icons.lupa_icon} alt="" className="lupa_icon" />
    </div>
  );
};

export default Search;
