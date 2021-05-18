import { useState, useEffect } from "react";
import styles from "../../styles/auth.module.css";
import { Auth } from "aws-amplify";
import "../../src/config_Amplify";
import SocialSignIn from "../../components/SocialSignUp";
import SignInForm from "../../components/SignIn";
function Profile() {
  const [user, setUser] = useState(null);
  const [ui, setUi] = useState();
  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const { user } = await Auth.currentAuthenticatedUser();
        console.log(user);

        setUser(user);
       setUi("Profile");
      } catch (error) {
        setUser(null);
        setUi("SignUp");
      }
    }
  }, []);
  return (
    <div>
      {ui == "SignUp" && <SocialSignIn ui={ui} setUi={setUi} />}
      {ui == "SignIn" && <SignInForm ui={ui} setUi={setUi} />}
      {ui == "Profile" && (
        <div>
          {" "}
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum
            repellendus neque voluptatum hic fugiat quo quos modi ab possimus
            dolorum beatae laudantium accusamus, sint nostrum illo eum similique
            aliquid eligendi, placeat qui asperiores nesciunt iusto! Tenetur at
            natus labore itaque optio molestias ipsa a obcaecati consectetur
            cumque rerum delectus mollitia aliquam possimus rem, ullam
            asperiores sapiente, sed numquam provident exercitationem omnis!
            Dolor blanditiis placeat laboriosam numquam adipisci atque officiis
            praesentium dolorum eos consequuntur possimus quod nemo neque
            quaerat repellendus eveniet qui, alias maxime dignissimos aperiam
            libero iure cum? Architecto veniam facere, maiores at fuga odio
            libero iusto nam quasi?
          </h1>
          <button
            onClick={async () => {
              try {
                await Auth.signOut();
              } catch (error) {
                console.log("error signing out: ", error);
              }
            }}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
