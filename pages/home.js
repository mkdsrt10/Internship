import styles from "../styles/home.module.css";
import Coins from "../components/Coins";
import What_we_do_container from "../components/What_we_do";
import Link from "next/link";
const Home = () => {
  return (
    <div className={styles.Root}>
      <div className={styles.mainContainer}>
        <div className={styles.top_contianer}>
          <div className={styles.top_contianer_content}>
            <div className={styles.top_contianer_content_title}>
              <div className={styles.fund_raise_in}>Raise Funds in</div>
              <div className={styles.cryptoCurrency}>CryptoCurrency</div>
              <div className={styles.need_for_funds}>
                Need Funds to Pay For a Medical Emergency or Social Cause?
              </div>
              <div className={styles.start_now}>
                <div className={styles.text}>
                  Start a fund raise - It’s FREE
                </div>
              </div>
            </div>
          </div>
          <div className={styles.top_contianer_image}></div>
        </div>
      </div>
      <Coins />
      <What_we_do_container />
    </div>
  );
};

export default Home;
