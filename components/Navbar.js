import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import Slide from "react-reveal/Slide";
import ReorderOutlinedIcon from "@material-ui/icons/ReorderOutlined";
import { route } from "next/dist/next-server/server/router";
const Navbar = () => {
  const router = useRouter();
  const [nav, setnav] = useState(false);
  const toggle_Handler = (e) => {
    console.log(e.target);
    setnav(!nav);
  };
  const Handler = (e) => {
    if (nav) {
      setnav(!nav);
    }
  };
  return (
    <div className={styles.container}>
      <Slide top>
        <div className={styles.Navbar}>
          <img
            src="../favicon.ico"
            alt="Blogs"
            className={styles.logo}
            onClick={() => {
              if (nav) {
                setnav(!nav);
              }
              router.push("/");
            }}
          />
          <nav
            className={
              nav == true ? styles.list_items_active : styles.list_items
            }
          >
            <li onClick={Handler}>
              <Link href={"/home"}>
                <a className={styles.a}>Ways to Donate</a>
              </Link>
            </li>

            <li onClick={Handler}>
              <Link href={"/home"}>
                <a className={styles.a}>Get Involoved</a>
              </Link>
            </li>

            <li onClick={Handler}>
              <Link href={"/About"}>
                <a className={styles.a}>About Us</a>
              </Link>
            </li>
            <li onClick={Handler}>
              <Link href={"/blogs"}>
                <a className={styles.a}>Blogs</a>
              </Link>
            </li>

            <li onClick={Handler}>
              <Link href={"/home"}>
                <a className={styles.a}>Reach</a>
              </Link>
            </li>
          </nav>

          <div className={styles.toggle_button}>
            <button onClick={toggle_Handler}>
              <ReorderOutlinedIcon />
            </button>
          </div>
          <div>
            <button
              className={styles.Login}
              onClick={() => {
                router.push("/auth/profile");
              }}
            >
              LogIn
            </button>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Navbar;
