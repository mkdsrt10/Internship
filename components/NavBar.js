import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [nav, setnav] = useState(false);
  const handler = () => {
    setnav(!nav);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>Support coin</div>
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
              <a className={styles.faq}>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.contactus}>Contact us</a>
            </Link>
          </li>
        </div>
      </div>
      <div
        className={nav == true ? styles.Hamburger_change : styles.Hamburger}
        onClick={handler}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
};

export default NavBar;
