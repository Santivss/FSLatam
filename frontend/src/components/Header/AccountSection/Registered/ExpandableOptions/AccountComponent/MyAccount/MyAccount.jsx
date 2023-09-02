import "./MyAccount.css";
import MyAccountUserInfo from "./MyAccountUserInfo/MyAccountUserInfo";
import MyAccountBanner from "./MyAccountBanner/MyAccountBanner";
import MyAccountUserInfoInputs from "./MyAccountUserInfoInputs/MyAccountUserInfoInputs";

const MyAccount = () => {
  return (
    <div className="myAccount__container">
      <MyAccountBanner />
      <MyAccountUserInfo />
      <MyAccountUserInfoInputs />
    </div>
  );
};

export default MyAccount;
