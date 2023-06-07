import "./ListItems.css";

const ListItems = ({ image }) => {
  return (
    <div className="list__container">
      <img src={image} alt="" className="mod__icon" />
    </div>
  );
};

export default ListItems;
