import {Auth } from "aws-amplify"
import { useState } from "react";
import styles from "../styles/SignIn.module.css"
const SignIn = ({ui ,setUi}) => {
  const [form ,setForm] =useState({email: "" ,password:""})
  const SignInHandler= async(e)=>{
    e.preventDefault();
     try {
       const user = await Auth.signIn(form.email, form.password);
       setUi("Profile")
     } catch (error) {
       console.log("error signing in", error);
       setUi("SignUp");
     }
  }
  return (
    <div className={styles.main_container}>
      Login to Account
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
              onChange={(e)=>{
                setForm({ ...form, email: e.target.value }
                  );
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
        <button onClick={SignInHandler}>SignUp</button>
      </form>
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
    </div>
  );
};

export default SignIn;
