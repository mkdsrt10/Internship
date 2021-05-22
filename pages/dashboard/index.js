import { useEffect, useState } from "react";
import Home from "../../components/DashBoard/Home";
import For_you from "../../components/DashBoard/For_you";
import Settings from "../../components/DashBoard/Settings";
import styles from "../../styles/Dashboard.module.css";

import { withSSRContext } from "aws-amplify";
import "../../src/config_Amplify";
import {menu_items} from "../../src/constant";
import {useRouter} from "next/router";

const ui = "Home";
const DashBoard = ({ user }) => {
  const router=useRouter();
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
                        router.push("/dashboard/"+item.url);
                      }}
                  >
                    {item.name}{" "}
                  </div>
              );
            })}
          </div>
          <div className={styles.DashBoard_content}>
            <Home/>
          </div>
        </div>
      </div>
  );
};

export const getServerSideProps = async (context) => {
  const {Auth } =withSSRContext(context);
  try {
    const  user  = await Auth.currentAuthenticatedUser();
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
        permanent:false,
        destination:"/auth/profile"
      },
    };
  }
};

export default DashBoard;
