import "./AccountSection.css";
import NotRegistered from "./NotRegistered/NotRegistered";
import Registered from "./Registered/Registered";
import { userInfoStore } from "../../../store/userInfoStore";

const AccountSection = () => {
  const { isAuthenticated } = userInfoStore();
  console.log(isAuthenticated);

  return (
    <div className="account">
      {!isAuthenticated ? <NotRegistered /> : <Registered />}
    </div>
  );
};

export default AccountSection;
