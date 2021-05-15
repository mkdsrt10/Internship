import styles from "../styles/Home.module.css";
import Coins from "../components/Coins";
import What_we_do_container from "../components/What_we_do";
import Impact_conatiner from "../components/Impact";
import Link from "next/link";
import { useState } from "react";
const Home = () => {
  const [news, setNews] = useState(["v", "v", "v"]);
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
      <Impact_conatiner />
      <div className={styles.case_study_container}>
        <div className={styles.case_study_content_container}>
          <div className={styles.case_study_content_title}>CASE STUDY</div>
          <div className={styles.case_study_content_subtitle}>
            Crypto bringing the <span>CHANGE</span>
          </div>
        </div>

        <div className={styles.case_study_content_grid}>
          {news.map((e) => {
            return (
              <div className={styles.case_study_content_each_grid}>
                <img src={"/1.jpg"} />
                <div className={styles.case_study_content_each_text}>
                  Crypto genius gives a billion dollars worth of joke coin for
                  India covid relief
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.mission}>
        <div className={styles.mission_text}>
          Our mission is to help NGOs & Social workers fundraise from global
          audience without any friction.
        </div>
      </div>
    </div>
  );
};

export default Home;
