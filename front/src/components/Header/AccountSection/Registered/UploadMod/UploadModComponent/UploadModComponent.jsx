import "./UploadModComponent.css";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../../../../store/ui_icons_store";
import InputVersion from "./InputsComponent/InputVersion";
import InputDescription from "./InputsComponent/InputDescription";
import Categories from "./Categories/Categories";
import { useEffect } from "react";
import axios from "axios";

const UploadModComponent = ({ onConfirm }) => {
  const { ui_icons } = useIconsStore();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <form className="uploadModComponent__container">
      <h1 className="uploadComponent__title">Subir mod</h1>
      <div className="advertise__container">
        {/* -----------Mensaje de Recomendacion----------- */}
        <span className="advertise_title">
          Por favor revisar y resolver cualquier error en el log que pueda tener
          el mod antes de enviarlo, ya que esto genera problemas rendimiento en
          el juego.
        </span>
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button type="button" className="buttonConfirm__container">
            Ok
          </button>
        </motion.div>
      </div>

      <InputVersion />

      <InputDescription />

      <Categories />

      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem iste
          totam sint. Velit minus nobis fugiat obcaecati similique tempore
          omnis, qui pariatur iste fuga nisi, ab accusamus mollitia consequatur
          ad distinctio quaerat dignissimos neque illo aliquam dicta officiis?
          Eius animi quos dolores, ad recusandae inventore sapiente sint fugiat
          est quo ipsam nihil enim aspernatur ducimus expedita officia
          distinctio impedit eum necessitatibus voluptate laborum quibusdam.
          Vero debitis totam quibusdam odit, at animi ad sed dolores eveniet
          officiis consequuntur cum vel! Quaerat iusto sed nesciunt possimus
          tenetur eaque perspiciatis! Dicta maiores odit, sit in perspiciatis
          nulla consequatur rerum aperiam, earum reiciendis excepturi laboriosam
          nam. Ea laudantium minima similique animi sed dolor exercitationem
          enim officiis deleniti incidunt, et possimus quia maiores praesentium
          voluptatibus iusto ducimus, in quos consequatur culpa sint sequi ut.
          Cumque pariatur neque esse est repudiandae consequuntur, doloremque
          aliquam eum totam! Rem quaerat nisi fugiat obcaecati recusandae optio
          quae libero.
        </span>
      </div>

      {/*  <div>
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          type="button"
          className=""
        ></motion.button>
      </div> */}
    </form>
  );
};

export default UploadModComponent;
