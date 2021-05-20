import styles from "../styles/footer.module.css";
import Slide from "react-reveal/Slide";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_container}>
          <div className={styles.footer_top_title}>
            Subscribe to get notified about update
          </div>
          <div className={styles.footer_top_subtitle}>
            By subscribing with your mail, you will accept our privacy policy
          </div>
          <div className={styles.subscribe}>
            <input placeholder="Enter your Email" />
            <button>Subscribe us</button>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.copyright}>
          <img src="CryptoFunds-white.png"></img> <span>@ Copyright 2021</span>
        </div>
        <div className={styles.footer_nav}>
          <ul>
            <li>Home</li>
            <li>Advertise</li>
            <li>Supports</li>
            <li>Marketings</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
