import { Auth } from "aws-amplify";
import { useState } from "react";
import { useRouter } from "next/router";
import DialogBox from "../components/DialogBox";
import styles from "../styles/SignIn.module.css";
const SignIn = ({ ui, setUi }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    error: "",
  });

  const [dialog, setDialog] = useState({ show: false, message: "" });
  const SignInHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await Auth.signIn(form.email, form.password);
      console.log(user);
      router.push("/dashboard");
    } catch (error) {
      console.log("error signing in", error);
      setForm({ ...form, error: error.message });
      setDialog({
        show: true,
        message: error.message,
      });
    }
  };
  return (
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
            const { user } = await Auth.federatedSignIn({
              provider: "Google",
            });
            console.log(user);
          }}
        >
          SignIn with Google
        </button>
        <button
          onClick={async () => {
            const { user } = await Auth.federatedSignIn({
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
  );
};

export default SignIn;
