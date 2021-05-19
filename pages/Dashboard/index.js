import { useState } from "react";
import Home from "../../components/DashBoard/Home";
import For_you from "../../components/DashBoard/For_you";
import Settings from "../../components/DashBoard/Settings";
import styles from "../../styles/Dashboard.module.css";
const DashBoard = () => {
  const menu_items = [
    "Home",
    "Audience",
    "Events",
    "Newsletter",
    "For you",
    "Settings",
  ];
  const [ui, setui] = useState("Home");
  return (
    <div className={styles.main_container}>
      <div className={styles.DashBoard}>
        <div className={styles.DashBoard_menu}>
          {menu_items.map((item, index) => {
            return (
              <div
                className={styles.DashBoard_menu_items}
                key={index}
                onClick={(e) => {
                  setui(item);
                }}
              >
                {item}{" "}
              </div>
            );
          })}
        </div>
        <div className={styles.DashBoard_content}>
          {ui == "Home" && <Home />}
          {ui == "For you" && <For_you />}
          {ui == "Settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
