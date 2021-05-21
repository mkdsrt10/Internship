import { useState } from "react";
import styles from "../../../styles/SettingsAccount.module.css";
const Account = () => {
  const [AccountInformationForm, setAccountInformationForm] = useState({
    email: "",
    username: "",
  });
  const [AccountPasswordForm, setAccountPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  return (
    <div>
      <div className={styles.account_information}>
        <span>Account Information</span>
        <div className={styles.input_field}>
          <label>
            EMAIL
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setAccountInformationForm({...AccountInformationForm, email: e.target.value });
              }}
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label>
            USERNAME
            <br />
            <input
              type="text"
              name="text"
              id="text"
              onChange={(e) => {
                setAccountInformationForm({ ...AccountInformationForm,username: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <button
            onClick={(e) => {
              console.log(AccountInformationForm);
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className={styles.account_password}>
        <span>Account Password</span>
        <div className={styles.input_field}>
          <label>
            CURRENT PASSWORD
            <br />
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              onChange={(e) => {
                setAccountPasswordForm({ ...AccountPasswordForm,currentPassword: e.target.value });
              }}
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label>
            NEW PASSWORD
            <br />
            <input
              type="password"
              name="npassword"
              id="npassword"
              onChange={(e) => {
                setAccountPasswordForm({ ...AccountPasswordForm,newPassword: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <button
            onClick={(e) => {
              console.log(AccountPasswordForm);
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
