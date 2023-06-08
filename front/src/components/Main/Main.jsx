import "./Main.css";
import Filters from "./Filters/Filters";
import Slider from "./Slider/Slider";
import { imagenes } from "../../assets";
import ListItems from "./ListItems/ListItems";

export const Main = () => {
  return (
    <main className="main">
      <Slider />
      <div className="filters-container">
        <Filters />
      </div>
      <div className="list-items-container">
        <ListItems image={imagenes[35]} />
        <ListItems image={imagenes[36]} />
        <ListItems image={imagenes[3]} />
        <ListItems image={imagenes[2]} />
        <ListItems image={imagenes[4]} />
        <ListItems image={imagenes[9]} />
        <ListItems image={imagenes[6]} />
        <ListItems image={imagenes[7]} />
        <ListItems image={imagenes[5]} />
        <ListItems image={imagenes[8]} />
        <ListItems image={imagenes[62]} />
        <ListItems image={imagenes[14]} />
        <ListItems image={imagenes[11]} />
        <ListItems image={imagenes[43]} />
        <ListItems image={imagenes[12]} />
        <ListItems image={imagenes[13]} />
        <ListItems image={imagenes[15]} />
        <ListItems image={imagenes[20]} />
        <ListItems image={imagenes[17]} />
        <ListItems image={imagenes[18]} />
        <ListItems image={imagenes[19]} />
        <ListItems image={imagenes[21]} />
        <ListItems image={imagenes[54]} />
        <ListItems image={imagenes[25]} />
        <ListItems image={imagenes[22]} />
        <ListItems image={imagenes[23]} />
        <ListItems image={imagenes[16]} />
        <ListItems image={imagenes[24]} />
        <ListItems image={imagenes[27]} />
        <ListItems image={imagenes[33]} />
        <ListItems image={imagenes[28]} />
        <ListItems image={imagenes[29]} />
        <ListItems image={imagenes[30]} />
        <ListItems image={imagenes[31]} />
        <ListItems image={imagenes[32]} />
        <ListItems image={imagenes[34]} />
        <ListItems image={imagenes[39]} />
        <ListItems image={imagenes[37]} />
        <ListItems image={imagenes[42]} />
        <ListItems image={imagenes[0]} />
        <ListItems image={imagenes[40]} />
        <ListItems image={imagenes[41]} />
        <ListItems image={imagenes[38]} />
        <ListItems image={imagenes[26]} />
        <ListItems image={imagenes[44]} />
        <ListItems image={imagenes[45]} />
        <ListItems image={imagenes[47]} />
        <ListItems image={imagenes[48]} />
        <ListItems image={imagenes[51]} />
        <ListItems image={imagenes[49]} />
        <ListItems image={imagenes[50]} />
        <ListItems image={imagenes[46]} />
        <ListItems image={imagenes[10]} />
        <ListItems image={imagenes[51]} />
        <ListItems image={imagenes[53]} />
        <ListItems image={imagenes[57]} />
        <ListItems image={imagenes[55]} />
        <ListItems image={imagenes[56]} />
        <ListItems image={imagenes[52]} />
        <ListItems image={imagenes[58]} />
        <ListItems image={imagenes[59]} />
        <ListItems image={imagenes[1]} />
        <ListItems image={imagenes[63]} />
        <ListItems image={imagenes[60]} />
      </div>
    </main>
  );
};
