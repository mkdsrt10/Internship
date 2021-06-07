import styles from "../../styles/NgoDetails.module.css";
import Chips, { Chip } from "react-chips";
import { useState } from "react";
import axios from "axios";
const NgoDetails = () => {
  const onSubmitClickHandler = async (e) => {
    console.log(form);
    const res = await axios.post(
      "https://zj0tskm7eh.execute-api.ap-south-1.amazonaws.com/dev/createNgo",
      form,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(res);
  };
  const teamInputHandler = (e, index) => {
    console.log(e.target.name);
    const values = [...form.team];
    values[index][e.target.name] = e.target.value;
    setForm({ ...form, team: values });
    console.log(form.team);
  };
  const DeleteHandler = (e, index) => {
    const values = [...form.team];
    values.splice(index, 1);
    setForm({ ...form, team: values });
  };
  const [category, setCategory] = useState(["vipin"]);
  const [teamform, setTeamform] = useState(["1"]);
  const [form, setForm] = useState({
    ngoid: "",
    ngoName: "",
    ngoAddress: "",
    areaOperation: "",
    description: "",
    social_links: {
      facebook: "",
      linkedIn: "",
      website: "",
    },
    team: [{ Name: "", Designation: "", LinkedIn: "", Twitter: "", image: "" }],
  });
  return (
    <div className={styles.main_container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.ngo_details}>
          <div className={styles.input_field}>
            <label for="ngoid">
              NGO ID
              <br />
              <input
                required
                type="text"
                id="NGOid"
                value={form.ngoid}
                name="ngoid"
                onChange={(e) => {
                  setForm({ ...form, ngoid: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label for="ngoName">
              NGO Name
              <br />
              <input
                required
                type="text"
                id="ngoName"
                name="ngoName"
                value={form.ngoName}
                onChange={(e) => {
                  setForm({ ...form, ngoName: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label for="ngoAddress">
              NGO Address
              <br />
              <input
                required
                type="text"
                id="ngoAddress"
                name="ngoAddress"
                value={form.ngoAddress}
                onChange={(e) => {
                  setForm({ ...form, ngoAddress: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label for="areaOperation">
              Area Operation
              <br />
              <input
                required
                type="text"
                id="areaOperation"
                name="areaOperation"
                value={form.areaOperation}
                onChange={(e) => {
                  setForm({ ...form, areaOperation: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label for="description">
              Description
              <br />
              <input
                required
                type="text"
                id="description"
                value={form.description}
                name="description"
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label for="Image">
              Image
              <br />
              <input
                required
                type="file"
                name="myImage"
                accept="image/png, image/gif, image/jpeg"
              />
            </label>
          </div>

          <div className={styles.social_details}>
            <span>Socail Links</span>
            <div className={styles.input_field}>
              <label for="Facbook">
                Facbook profile
                <br />
                <input
                  type="url"
                  name="url"
                  id="url"
                  value={form.social_links.facebook}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      social_links: {
                        ...form.social_links,
                        facebook: e.target.value,
                      },
                    });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="LinkedIn">
                LinkedIn
                <br />
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={form.social_links.linkedIn}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      social_links: {
                        ...form.social_links,
                        linkedIn: e.target.value,
                      },
                    });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="Website">
                Website
                <br />
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={form.social_links.website}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      social_links: {
                        ...form.social_links,
                        website: e.target.value,
                      },
                    });
                  }}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.team_members}>
          <span>Team Members</span>
          <div className={styles.all_team}>
            {form.team.map((team, index) => {
              return (
                <div className={styles.team_members_form} key={index}>
                  {" "}
                  <div className={styles.remove_team}>
                    <div>
                      <span>Team Member {index + 1}</span>
                    </div>
                    {index > 0 ? (
                      <div
                        onClick={(e) => {
                          DeleteHandler(e, index);
                        }}
                        className={styles.cross}
                      >
                        ❌
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className={styles.input_field}>
                    <label for="Name">
                      Name
                      <br />
                      <input
                        required
                        type="text"
                        id="Name"
                        name="Name"
                        value={form.team[index].Name}
                        onChange={(e) => {
                          teamInputHandler(e, index);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.input_field}>
                    <label for="Designation">
                      Designation
                      <br />
                      <input
                        required
                        type="text"
                        id="Designation"
                        name="Designation"
                        value={form.team[index].Designation}
                        onChange={(e) => {
                          teamInputHandler(e, index);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.input_field}>
                    <label for="LinkedIn">
                      LinkedIn
                      <br />
                      <input
                        required
                        type="text"
                        id="LinkedIn"
                        name="LinkedIn"
                        value={form.team[index].LinkedIn}
                        onChange={(e) => {
                          teamInputHandler(e, index);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.input_field}>
                    <label for="Twitter">
                      Twitter
                      <br />
                      <input
                        required
                        type="text"
                        id="Twitter"
                        name="Twitter"
                        value={form.team[index].Twitter}
                        onChange={(e) => {
                          teamInputHandler(e, index);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.input_field}>
                    <label for="Image">
                      Image
                      <br />
                      <input
                        required
                        type="file"
                        name="image"
                        accept="image/png, image/gif, image/jpeg"
                        value={form.team[index].image}
                        onChange={(e) => {
                          teamInputHandler(e, index);
                        }}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            onClick={(e) => {
              setForm({
                ...form,
                team: [
                  ...form.team,
                  {
                    Name: "",
                    Designation: "",
                    LinkedIn: "",
                    Twitter: "",
                    image: "",
                  },
                ],
              });
            }}
            className={styles.add_button_team}
          >
            Add Member
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit" onClick={onSubmitClickHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NgoDetails;
