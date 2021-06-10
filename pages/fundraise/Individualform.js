import styles from "../../styles/Individualform.module.css";
import Select from "react-select";
import { useState } from "react";
import options from "../../utility/crypto_options";
import Categories_options from "../../utility/categories_options";
import axios from "axios";
const IndividualForm = () => {
  const [form, setForm] = useState({
    firstname: " ",
    lastname: "",
    email: "",
    phone: "",
    title: "",
    about: "",
    how_fund_raise_will_help: "",
    how_much_to_raise: "",
    cryptos: [],
    categories: [],
    team: [{ name: "", linkedin: "" }],
  });
  const onSubmitFormHandler = (e) => {
    const res = axios.post(
      "https://zj0tskm7eh.execute-api.ap-south-1.amazonaws.com/dev/createFundraiserIndividual",
      form,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(res);
  };
  const AddteamInfoHandler = (e, index) => {
    const values = [...form.team];
    values[index][e.target.name] = e.target.value;
    setForm({ ...form, team: values });
    console.log(form.team);
  };
  const DeleteteamHanlder = (e, index) => {
    const values = [...form.team];
    values.splice(index, 1);
    setForm({ ...form, team: values });
  };
  return (
    <div className={styles.main_container}>
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
                    const name = e.target.value;
                    setForm({ ...form, firstname: name });
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
            <div className={styles.input_field}>
              <label>
                Categories
                <br />
                <Select
                  className={styles.categories_select}
                  isMulti
                  options={Categories_options}
                  isSearchable
                  placeholder={"Category"}
                  value={form.categories}
                  closeMenuOnSelect={false}
                  onChange={(e) => {
                    setForm({ ...form, categories: e });
                  }}
                />
              </label>
            </div>
          </div>
          <div className={styles.About_team}>
            <span>About team</span>
            <div className={styles.About_team_row}>
              {form.team.map((player, i) => {
                return (
                  <div key={i}>
                    <div className={styles.About_team_remove_team}>
                      <div className={styles.input_field}>Mate #{i + 1}</div>
                      {i > 0 ? (
                        <div
                          onClick={(e) => {
                            DeleteteamHanlder(e, i);
                          }}
                          className={styles.input_field}
                        >
                          ❌
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className={styles.input_field}>
                      <label htmlFor="Name">
                        Name
                        <br />
                        <input
                          required
                          type="text"
                          name="name"
                          value={form.team[i].name}
                          onChange={(e) => {
                            AddteamInfoHandler(e, i);
                          }}
                        />
                      </label>
                    </div>
                    <div className={styles.input_field}>
                      <label htmlFor="LinkedIn">
                        LinkedIn Profile
                        <br />
                        <input
                          required
                          type="url"
                          name="linkedIn"
                          value={form.team[i].linkedin}
                          onChange={(e) => {
                            AddteamInfoHandler(e, i);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                );
              })}
              <div className={styles.About_team_button_container}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setForm({
                      ...form,
                      team: [...form.team, { name: "", linkedin: "" }],
                    });
                  }}
                >
                  Add teammates
                </button>
              </div>
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
                isSearchable
                placeholder={"Select multiple crypto"}
                value={form.cryptos}
                closeMenuOnSelect={false}
                onChange={(e) => setForm({ ...form, cryptos: e })}
              />
            </div>
          </div>
        </form>
        <div className={styles.button_container}>
          <button type="submit" onClick={onSubmitFormHandler}>
            Create the fundraise
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualForm;
