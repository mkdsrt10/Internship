import styles from "../../styles/Individualform.module.css";
import Select from "react-select";
import { useState } from "react";
import options from "../../utility/crypto_options"
const IndividualForm = () => {
  const [form, setForm] = useState({
    firstname: " ",
    lastname: "",
    email: "",
    phone: "",
    title: "",
    about: "",
    how_fund_raise_will_help: "",
    linkedIn_profile: "",
    social_media_link: "",
    how_much_to_raise: "",
    cryptos: [],
  });
  const FormHandler = (e) => {
    
    console.log(form)
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <form>
          <div className={styles.about_you_container}>
            <span>About you</span>
            <div className={styles.input_field}>
              <label for="firstname">
                First name
                <br />
                <input
                  required
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={form.firstname}
                  onChange={(e) => {
                    const name = e.target.value.split(" ");
                    setForm({ ...form, firstname: name[0], lastname: name[1] });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="lastname">
                Last name
                <br />
                <input
                  required
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={form.lastname}
                  onChange={(e) => {
                    setForm({ ...form, lastname: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="email">
                Email
                <br />
                <input
                  required
                  type="email"
                  value={form.email}
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="phone">
                Phone Number
                <br />
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                  }}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.about_cause_container}>
            <span>About cause</span>
            <div className={styles.input_field} key="1">
              <label for="title">
                Title
                <br />
                <input
                  required
                  value={form.title}
                  type="text"
                  onChange={(e) => {
                    setForm({ ...form, title: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="about">
                About
                <br />
                <input
                  required
                  value={form.about}
                  type="text"
                  onChange={(e) => {
                    setForm({ ...form, about: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="How fund raiser willl help">
                How fund raiser willl help
                <br />
                <textarea
                  type="text"
                  value={form.how_fund_raise_will_help}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      how_fund_raise_will_help: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
          </div>
          <div className={styles.About_team}>
            <span>About team</span>
            <div className={styles.input_field}>
              <label for="LinkedIn">
                LinkedIn Profile
                <br />
                <input
                  required
                  type="url"
                  value={form.linkedIn_profile}
                  onChange={(e) => {
                    setForm({ ...form, linkedIn_profile: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="Social Media Link">
                Social Media Link
                <br />
                <input
                  required
                  value={form.social_media_link}
                  type="url"
                  onChange={(e) => {
                    setForm({ ...form, social_media_link: e.target.value });
                  }}
                />
              </label>
            </div>
          </div>
          <div className={styles.payment}>
            <span>Payment</span>
            <div className={styles.input_field}>
              <label for="How much to raise">
                How much to raise
                <br />
                <input
                  required
                  value={form.how_much_to_raise}
                  type="number"
                  onChange={(e) => {
                    setForm({ ...form, how_much_to_raise: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.dropdown}>
              <span>Accept payment in which cryptos:</span>
              <Select
                className={styles.select}
                isMulti
                options={options}
                value={form.cryptos}
                closeMenuOnSelect={false}
                onChange={(e) => setForm({ ...form, cryptos: e })}
              />
            </div>
          </div>
        </form>
        <div className={styles.button_container}>
          <button type="submit" onClick={FormHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualForm;
