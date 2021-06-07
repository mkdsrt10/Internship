import { Auth } from "aws-amplify";
import { useState } from "react";
import { useRouter } from "next/router";
import DialogBox from "../components/DialogBox";
import styles from "../styles/SignIn.module.css";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const SignIn = ({ ui, setUi }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    error: "",
  });

  const [Loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({ show: false, message: "" });
  const useStyle = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
      height: "700"
    },
  }));
  const classes=useStyle();
  const SignInHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { user } = await Auth.signIn(form.email, form.password);
      console.log(user);
      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      console.log("error signing in", error);
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
        <div style={{height:"400px"}}>
          <Backdrop className={classes.backdrop} open={Loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <div className={styles.main_container}>
          <span>Login to your Account</span>
          <form>
            <div className={styles.input_field}>
              <label for="email">
                Email
                <br />
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label for="password">
                Password
                <br />
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </label>
            </div>
            <button onClick={SignInHandler}>SignIn</button>
          </form>
          <div className={styles.social_signIn}>
            <button
              onClick={async () => {
                const user= await Auth.federatedSignIn({
                  provider: "Google",
                });
                console.log(user);
              }}
            >
              SignIn with Google
            </button>
            <button
              onClick={async () => {
                const user = await Auth.federatedSignIn({
                  provider: "Facebook",
                });
                console.log(user);
              }}
            >
              SignIn with Facebook
            </button>
          </div>
          <div className={styles.Signup}>
            Create Account{" "}
            <span
              onClick={() => {
                setUi("SignUp");
              }}
            >
              SignUp
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

export default SignIn;
