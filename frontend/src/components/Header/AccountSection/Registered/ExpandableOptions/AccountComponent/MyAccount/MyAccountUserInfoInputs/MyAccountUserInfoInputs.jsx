import "./MyAccountUserInfoInputs.css";

const MyAccountUserInfoInputs = () => {
  const textInputs = [
    { type: "text", title: "Nombre de usuario", placeholder: "Rucking" },
    { type: "email", title: "Email", placeholder: "RuckingFS@outlook.es" },
    { type: "password", title: "Contraseña actual", placeholder: "" },
    { type: "password", title: "Nueva Contraseña", placeholder: "" },
    { type: "password", title: "Repetir Contraseña", placeholder: "" },
  ];

  return (
    <div className="myAccountUserInfoInputs__container">
      <span className="myAccountUserInfoInputs__title">
        Configuración de la cuenta
      </span>
      {textInputs.map((item, index) => {
        return (
          <div key={index} className="userInfoInputs__container">
            <span className="userInfoInputs__input">{item.title}</span>
            <input
              type={`${item.type}`}
              className="testInput"
              placeholder={`${item.placeholder}`}
            />
          </div>
        );
      })}
      <button className="userInfoInputs__buttonSave">Guardar</button>
    </div>
  );
};

export default MyAccountUserInfoInputs;
