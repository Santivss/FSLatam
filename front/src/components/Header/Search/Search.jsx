import "./Search.css";
import lupa_icon from "../../../assets/uiIcons/lupa_icon.svg"

const Search = () => {
  return <div className="search__container">
    <input type="text" placeholder="Search" className="search__input" />
    <button className="btn">Search</button>
    <img src={lupa_icon} alt="" className="lupa_icon" />
  </div>;
};

export default Search;
