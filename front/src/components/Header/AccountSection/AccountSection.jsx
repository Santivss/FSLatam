import "./AccountSection.css";
import NotRegistered from "./NotRegistered/NotRegistered";
import Registered from "./Registered/Registered";

const AccountSection = () => {
  const userRegister = false;

  return (
    <div className="account">
      {!userRegister ? <NotRegistered /> : <Registered />}
    </div>
  );
};

export default AccountSection;
