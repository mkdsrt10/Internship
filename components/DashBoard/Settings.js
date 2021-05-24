import { useState } from "react";
import styles from "../../styles/Settings.module.css";
import Account from "../../components/DashBoard/Settings/Account";
import Preferences from "../../components/DashBoard/Settings/Preferences";
import NgoDetails from "./Settings/NGOdetailes";

const Settings = () => {
  const [type, setType] = useState("Account");

  return (
    <div className={styles.main_container}>
      <span>For you</span>
      <div className={styles.title}>
        <div
          onClick={(e) => {
            setType("Account");
          }}
          className={type == "Account" ? styles.title_account_active : ""}
        >
          Account
        </div>
        <div
          className={type == "Preferences" ? styles.title_prefrence_active : ""}
          onClick={(e) => {
            setType("Preferences");
          }}
        >
          Prefrence
        </div>
        <div
          className={type == "Ngo" ? styles.title_ngo_active : ""}
          onClick={(e) => {
            setType("Ngo");
          }}
        >
          NGO
        </div>
        <div
          className={type == "Plus" ? styles.title_plus_active : ""}
          onClick={(e) => {
            setType("Plus");
          }}
        >
          Plus
        </div>
      </div>
      <div className={styles.content}>
        {type == "Account" && <Account />}
        {type == "Preferences" && <Preferences />}
        {type == "Ngo" && <NgoDetails />}
      </div>
    </div>
  );
};

export default Settings;
