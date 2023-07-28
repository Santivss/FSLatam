import "./MyMods.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { userInfoStore } from "../../../../../../../store/userInfoStore";

const MyMods = () => {
  const [modsUser, setModsUser] = useState(null);
  const { userId } = userInfoStore();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/modsUser/${userId}`)
      .then((res) => {
        setModsUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteRequest = (mod_id) => {
    axios
      .delete(`http://localhost:3000/api/modsUser/${mod_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="myMods__container">
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
              Delete
            </button>
            <button className="updateMod__btn">Update</button>
            <img
              src={"data:image/jpeg;base64," + item.thumbnail}
              alt=""
              className="myModImg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyMods;
