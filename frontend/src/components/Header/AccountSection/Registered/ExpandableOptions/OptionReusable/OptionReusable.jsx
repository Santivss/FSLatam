import "./OptionReusable.css";
import ToggleComponent from "../../../../../../utils/ToggleComponent";

const OptionReusable = ({ title, action, icon }) => {
  return (
    <div className="account__options-title" onClick={action}>
      <img src={icon} alt="" className="account__options-icon" />
      {title}
    </div>
  );
};

export default OptionReusable;
