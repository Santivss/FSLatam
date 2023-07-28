import { motion, AnimatePresence } from "framer-motion";
import "./AccountComponent.css";
import { useState } from "react";
import MyAccount from "./MyAccount/MyAccount";
import MyMods from "./MyMods/MyMods";
import OtherComponent from "./OtherComponent/OtherComponent";

const AccountComponent = () => {
  // Definir las pestañas o secciones de la barra de navegación
  const initialTabs = [
    { label: "Account", component: <MyAccount /> },
    { label: "My Mods", component: <MyMods /> },
    { label: "Comming Soon...", component: <OtherComponent /> },
    // Agregar más secciones según tus necesidades
  ];

  // Estado para guardar la pestaña seleccionada actualmente
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <div className="accountComponent__container">
      {/* Barra de navegación */}
      <nav className="accountComponentNav__container">
        <ul className="navItems__container">
          {initialTabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {` ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Área principal */}
      <main>
        <AnimatePresence>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mostrar el componente correspondiente */}
            {selectedTab ? selectedTab.component : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AccountComponent;
