import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { menu_items, PRIVATE_VIEW } from "../utility/constant";
const NavBar = ({dashboard,setDashboard}) => {
  const router = useRouter();
  const [nav, setnav] = useState(false);
  const handler = () => {
    setnav(!nav);
  };
  if (PRIVATE_VIEW.includes(router.pathname)) {
    return (
      <div
        className={
          dashboard == false ? styles.container_deactivate : styles.container
        }
      >
        <div className={styles.nav}>
          <div
            onClick={(e) => {
              router.push("/");
            }}
            className={styles.logo}
          >
            <img src="/CryptoFunds.png" />
          </div>
          <div
            className={nav == true ? styles.Hamburger_change : styles.Hamburger}
            onClick={handler}
          >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
          <div
            className={
              nav == true ? styles.nav_items_active : styles.nav_items_mobile
            }
          >
            {menu_items.map((menu) => {
              return (
                <li>
                  <Link href={"/dashboard/" + menu.url}>
                    <a className={styles.donate}>{menu.name}</a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div
          onClick={(e) => {
            router.push("/");
          }}
          className={styles.logo}
        >
          <img src="/CryptoFunds.png" />
        </div>
        <div
          className={nav == true ? styles.Hamburger_change : styles.Hamburger}
          onClick={handler}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <div
          className={nav == true ? styles.nav_items_active : styles.nav_items}
        >
          <li>
            <Link href="/vipin">
              <a className={styles.donate}>Donate</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className={styles.how_it_works}>How it works?</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.contactus}>Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/profile">
              <a className={styles.contactus}>Log In</a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
