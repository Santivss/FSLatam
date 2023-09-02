import "./MyAccountUserInfo.css";
import user_image_test from "../../../../../../../../assets/user_image_test.png";

const MyAccountUserInfo = () => {
  return (
    <div className="myAccountUserInfo__container">
      <img src={user_image_test} alt="" className="myAccountUser__image" />
      <span>Rucking</span>
      <div className="myAccountStats__container">
        <span>Seguidores</span>
        <span>Mods</span>
        <span>Descargas Totales</span>
        <span>Descargas hoy</span>
      </div>
    </div>
  );
};

export default MyAccountUserInfo;
