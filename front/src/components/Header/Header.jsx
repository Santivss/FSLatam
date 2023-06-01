import "./Header.css";
import AccountSection from "./AccountSection/AccountSection";
import { GameSelection } from "./GameSelection/GameSelection";
import Search from "./Search/Search";

export const Header = () => {
  return (
    <header className="header__container">
      <Search />
      <GameSelection />
      <AccountSection />
    </header>
  );
};
