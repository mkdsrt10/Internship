import Settings from "../../components/DashBoard/Settings";
import styles from "../../styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import { withSSRContext } from "aws-amplify";
import "../../src/config_Amplify";
import { menu_items } from "../../utility/constant";
import { useRouter } from "next/router";

const ui = "Settings";

const DashBoard = ({ user, dashboard, setDashboard }) => {
  useEffect(() => {
    setDashboard(false);
  }, []);
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.DashBoard}>
        <div className={styles.DashBoard_menu}>
          <div
            className={styles.logo}
            onClick={(e) => {
              router.push("/");
            }}
          >
            Crypto<span>Funds</span>
          </div>
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
              <div className={styles.user_name}>{"Mayank"}</div>
              <div className={styles.user_email}>{"cf.w/ngo1"}</div>
            </div>
          </div>
        </div>
        <div className={styles.DashBoard_content}>
          <Settings />
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
