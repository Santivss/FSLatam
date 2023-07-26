import "./Main.css";
import Filters from "./Filters/Filters";
import PrincipalSection from "./PrincipalSection/PrincipalSection";
import ListItems from "./ListItems/ListItems";

export const Main = () => {
  return (
    <main className="main">
      <PrincipalSection />
      <Filters />
      <ListItems />
    </main>
  );
};
