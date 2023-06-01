import "./Filters.css";
import FiltersSection from "./FiltersSection/FiltersSection";
import Filter_Antiquity_And_Size from "./Filter_Antiquity_And_Size/Filter_Antiquity_And_Size";

const Filters = () => {
  const timeAntiquity = [
    {
      type: "Antiquity",
      options: ["All", "New", "Intermediate", "Old"],
    },
  ];

  const timeSize = [
    {
      type: "Size",
      options: ["All", "Small", "Medium", "Large"],
    },
  ];

  return (
    <div className="filters__container">
      <FiltersSection />
      <Filter_Antiquity_And_Size time={timeAntiquity[0]} />
      <Filter_Antiquity_And_Size time={timeSize[0]} />
    </div>
  );
};

export default Filters;
