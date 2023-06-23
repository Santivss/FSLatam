import "./OptionReusable.css";

const OptionReusable = ({ title, action, icon }) => {
  return (
    <button className="account__options-title" onClick={action}>
      <img src={icon} alt="" className="account__options-icon" />
      {title}
    </button>
  );
};

export default OptionReusable;
