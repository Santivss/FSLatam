import "./Description.css";

const Description = ({ fullDataMod }) => {
  console.log(fullDataMod);
  const formatDate = (isolate) => {
    const date = new Date(isolate);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(options);
  };

  return (
    <div className="description__container">
      <div className="">
        <span className="description__component-dateTitle">
          {formatDate(fullDataMod?.createdAt)}
        </span>
      </div>
      <div className="description__component-descriptionTitle">
        <span className="">{fullDataMod?.mod_description}</span>
      </div>
    </div>
  );
};

export default Description;
