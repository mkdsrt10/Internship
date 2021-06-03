import styles from "../../styles/NgoDetails.module.css";
import Chips, { Chip } from "react-chips";
import { useState } from "react";
const NgoDetails = () => {
  const [category, setCategory] = useState(["vipin"]);
  const [teamform, setTeamform] = useState(["1"])
  const [form, setForm] = useState({
    ngoid: "",
    ngoName: "",
    ngoAddress: "",
    areaOperation: "",
    description: "",
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
                <input type="url" name="url" id="url" />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="LinkedIn">
                LinkedIn
                <br />
                <input type="url" id="url" name="url" />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="Website">
                Website
                <br />
                <input type="url" id="url" name="url" />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.team_members}>
          <span>Team Members</span>
          {teamform.map((team,index) => {
            return (
              <div className={styles.team_members_form}>
                {" "}
                <span>Team Member {index+1}</span>
                <div className={styles.input_field}>
                  <label for="Name">
                    Name
                    <br />
                    <input
                      required
                      type="text"
                      id="Name"
                      name="Name"
                      onChange={(e) => {}}
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
                      onChange={(e) => {
                        setForm({ ...form, ngoName: e.target.value });
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
                      onChange={(e) => {}}
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
                      onChange={(e) => {
                        setForm({ ...form, areaOperation: e.target.value });
                      }}
                    />
                  </label>
                </div>
                <div className={styles.input_field}>
                  <label for="Image">
                    Image
                    <br />
                    <input
                      type="file"
                      name="Image"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </label>
                </div>
              </div>
            );
          })}
          <div onClick={(e) => setTeamform([...teamform, e.target.value])}>
            Add Member
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit">Register</button>
        </div>
      </div>
    </div>
  );
};

export default NgoDetails;
