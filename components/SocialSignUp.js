import { Auth } from "aws-amplify";
import { useState } from "react";
import "../src/config_Amplify";
import styles from "../styles/SocialSignUp.module.css";
import DialogBox from "../components/DialogBox";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const SocialSignIn = ({ ui, setUi }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
    firstname: "",
    lastname: "",
    phone: "",
    error: "",
  });
  const [dialog, setDialog] = useState({ show: false, message: "" });
  const [Loading, setLoading] = useState(false);
  const useStyle = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
      height: "700",
    },
  }));
  const classes = useStyle();
  const SignupHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const email = form.email;
      const password = form.password;
      const confirm_password = form.confirm_password;
      if (password !== confirm_password) {
        setLoading(false);
        setForm({
          ...form,
          error: "Password and confirm password should be same ",
        });
        setDialog({
          show: true,
          message: "Password and confirm password should be same",
        });
        console.log(form.error);
        return;
      }
      const phone_number = "+91" + form.phone;
      console.log(email);
      const username = form.email;
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number, // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(user);
      setUi("SignIn");
    } catch (error) {
      setLoading(false);
      console.log("error signing up:", error);
      setForm({ ...form, error: error.message });
      setDialog({
        show: true,
        message: error.message,
      });
    }
  };

  return (
    <div>
      {Loading == true ? (
        <div style={{ height: "400px" }}>
          <Backdrop className={classes.backdrop} open={Loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <div className={styles.main_container}>
          <span>Sign up as an NGO</span>
          <form>
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
                    console.log(name[0]);

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
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="phone">
                Phone
                <br />
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label htmlFor="password">
                Password
                <br />
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label htmlFor="confirm password">
                Confirm Password
                <br />
                <input
                  required
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={form.confirm_password}
                  onChange={(e) => {
                    setForm({ ...form, confirm_password: e.target.value });
                  }}
                />
              </label>
            </div>
            <button onClick={SignupHandler}>SignUp</button>
          </form>

          <div className={styles.social_signIn}>
            <button
              onClick={async (e) => {
                const user = await Auth.federatedSignIn({
                  provider: "Google",
                });
                console.log(user);
              }}
            >
              SignUp with Google
            </button>
            <button
              onClick={async () => {
                const user = await Auth.federatedSignIn({
                  provider: "Facebook",
                });
                console.log(user);
              }}
            >
              SignUp with Facebook
            </button>
          </div>
          <div className={styles.login}>
            Already SignUp ?
            <span
              onClick={() => {
                setUi("SignIn");
              }}
            >
              LogIn
            </span>
          </div>
          <DialogBox
            show={dialog.show}
            message={dialog.message}
            setDialog={setDialog}
          />
        </div>
      )}
    </div>
  );
};

export default SocialSignIn;
