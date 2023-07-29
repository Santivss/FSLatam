import "./PrincipalSection.css";
import SlideComponent from "./SlideComponent/SlideComponent";
import { useIconsStore } from "../../../store/ui_icons_store";
import TopMods from "./TopMods/TopMods";
import { useEffect, useState } from "react";
import axios from "axios";
import TopStatsModsUsers from "./TopModders/TopStatsModsUsers";

const PrincipalSection = () => {
  const { ui_icons } = useIconsStore();
  const [topsData, setTopsData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/topModdersAndUsers")
      .then((res) => {
        setTopsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="principalSection__container">
      <TopStatsModsUsers topsData={topsData} />
      <SlideComponent />
      <TopMods topsData={topsData} />
    </div>
  );
};

export default PrincipalSection;
