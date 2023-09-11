import "./MyMods.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { userInfoStore } from "../../../../../../../store/userInfoStore";
import loading_icon from "../../../../../../../assets/uiIcons/loading_icon.svg";
import { motion } from "framer-motion";

const MyMods = () => {
  const [modsUser, setModsUser] = useState(null);
  const { userId } = userInfoStore();
  const [modsUserStatus, setmodsUserStatus] = useState(false);
  const [alertMessageStatus, setAlertMessageStatus] = useState({});
  const [deleteProcessStatus, setDeleteProcessStatus] = useState(false);
  const [actionProcessMessage, setActionProcessMessage] = useState(null);

  useEffect(() => {
    setmodsUserStatus(true);
    axios
      .get(`https://fslatam-back.onrender.com/api/modsUser/${userId}`)
      .then((res) => {
        setModsUser(res.data);
        setmodsUserStatus(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteRequest = (mod_id) => {
    setDeleteProcessStatus(true);
    axios
      .delete(`https://fslatam-back.onrender.com/api/modsUser/${mod_id}`)
      .then((res) => {
        setDeleteProcessStatus(false);
        setActionProcessMessage(res.data);
        window.location.reload();
      })
      .catch((err) => {
        setDeleteProcessStatus(false);
        console.log(err);
      });
  };

  const handleMouseEnter = (index) => {
    setAlertMessageStatus({ ...alertMessageStatus, [index]: true });
  };

  const handleMouseLeave = (index) => {
    setAlertMessageStatus({ ...alertMessageStatus, [index]: false });
  };

  return (
    <div className="myMods__container">
      {modsUserStatus ? (
        <img
          src={loading_icon}
          alt="loading_icon"
          className="myMods__loadingIcon"
        />
      ) : (
        <>
          {modsUser?.modsUser.map((item, index) => {
            const modNumber = index + 1;
            return (
              <div className="modsUser__container" key={item.mod_id}>
                <span className="modsUser__number">{modNumber}</span>
                {/* Aquí se muestra el número del mod */}
                <span>{item.mod_title}</span>
                <button
                  className="deleteMod__btn"
                  onClick={() => handleDeleteRequest(item.mod_id)}
                >
                  {deleteProcessStatus ? (
                    <img
                      src={loading_icon}
                      alt="loading_icon"
                      className="loadingIcondelete"
                    />
                  ) : (
                    "Delete"
                  )}
                </button>
                <button
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="updateMod__btn"
                >
                  Update
                </button>
                {alertMessageStatus[index] ? (
                  <span className="myMods__alertMessage">En desarrollo</span>
                ) : null}
                <img
                  src={"data:image/jpeg;base64," + item.thumbnail}
                  alt=""
                  className="myModImg"
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MyMods;
