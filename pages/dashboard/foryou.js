import For_you from "../../components/DashBoard/For_you";
import styles from "../../styles/Dashboard.module.css";

import { withSSRContext } from "aws-amplify";
import "../../src/config_Amplify";
import { menu_items } from "../../utility/constant";
import { useRouter } from "next/router";
const ui = "For You";
const DashBoard = ({ user }) => {
  const data = ["v", "v", "v", "v", "v", "v"];
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.DashBoard}>
        <div className={styles.DashBoard_menu}>
          {menu_items.map((item, index) => {
            return (
              <div
                className={
                  ui == item.name
                    ? styles.DashBoard_menu_items_active
                    : styles.DashBoard_menu_items
                }
                key={index}
                onClick={(e) => {
                  router.push("/dashboard/" + item.url);
                }}
              >
                <img src={"/" + item.image + ".png"} />
                {item.name}{" "}
              </div>
            );
          })}
          <div className={styles.menu_bottom_user}>
            <img src="/girl_mobile.png" />
            <div className={styles.user_data}>
              <div className={styles.user_name}>{"Vipin"}</div>
              <div className={styles.user_email}>
                {"vipinjaluthria@gmail.com"}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DashBoard_content}>
          <div className={styles.For_you}>
            <div className={styles.For_you_title}>For You</div>
            <div className={styles.For_you_subtitle}>
              Stories from around the globe how they are using crypto for social
              cause
            </div>
          </div>
          <div className={styles.For_you_grid}>
            {data.map((e) => {
              return (
                <div className={styles.grid_each}>
                  <img src="/girl_mobile.png" />
                  <div className={styles.grid_title}>
                    Built school Playground in Sohagpur
                  </div>
                  <div className={styles.grid_description}>
                    Stories from around the globe how they are using crypto for
                    social cause
                  </div>
                  <div className={styles.read_more}>Read more {">>"}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return {
      props: {
        user: true,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/auth/profile",
      },
    };
  }
};

export default DashBoard;
