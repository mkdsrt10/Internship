import styles from "../styles/footer.module.css";
import Slide from "react-reveal/Slide";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Slide bottom>
        <div className={styles.container}>
          <div className={styles.container_content}>
            <div className={styles.resources}>
              <div className={styles.resources_title}>Resources</div>
              <div className={styles.resources_item}>
                <ul>
                  <li>
                    <Link href="/vipin">
                      <a>Nonprofit access</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>For developers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>Explore causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>Press center</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.About}>
              <div className={styles.About_title}>About</div>
              <div className={styles.About_item}>
                <ul>
                  <li>
                    <Link href="/vipin">
                      <a>Our impact </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>The team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vipin">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.email}>
            <div className={styles.email_title}>
              Enter your email for newsLetter
            </div>
            <form>
              <input
                className={styles.email_input}
                type="email"
                id="email"
                placeholder="Enter Your Email"
              ></input>
              <button
                className={styles.email_input_button}
                onClick={(e) => console.log(e)}
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copyright_container}>
          <div className={styles.copyright}>Copyright @ Vipin Jaluthria</div>
          <div className={styles.social_media_icon}>
            <img src="../facebook.png" />
            <img src="../twitter.png" />
            <img src="../instagram.png" />
            <img src="../linkedin.png" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
