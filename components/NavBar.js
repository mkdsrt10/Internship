import styles from "../styles/NavBar.module.css"
import Link from 'next/link'
const NavBar = () => {
  return (
      <div className={styles.nav}>
        <div className={styles.logo}>Support coin</div>
        <div className={styles.nav_items}>
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
  );
};

export default NavBar;
