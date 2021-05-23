import styles from "../../../styles/Preferences.module.css";
import Select from "react-select";
import options from "../../../utility/crypto_options";
const Preferences = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.payment_options}>
        <span>Patment Options</span>
        <div>To start accepting payment, first connect your bank account.</div>
        <div className={styles.currency}>
          <span>DEFAULT CURRENCY</span>
          <Select
            className={styles.select}
            isMulti
            options={options}
            closeMenuOnSelect={false}
            onChange={(e) => {}}
          />
          <button>Save Payments Options</button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
