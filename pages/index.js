import styles from "../styles/Home.module.css";
import Coins from "../components/Coins";
import What_we_do_container from "../components/What_we_do";
import Impact_conatiner from "../components/Impact";
import Link from "next/link";
import { useState } from "react";
import router from "next/router";
const Home = () => {
  const clickhandler=(e)=>{
    router.push("/fundraise");
  }
  const [news, setNews] = useState([{title:"Crypto genius gives a billion dollars worth of joke coin for India covid relief", image:"/news1.png", link:"https://www.livemint.com/news/india/crypto-genius-gives-a-billion-dollars-worth-of-joke-coin-for-india-covid-relief-11620892706902.html#:~:text=country%20or%20individual-,Vitalik%20Buterin%2C%20the%2027%2Dyear%2Dold%20founder%20of%20Ethereum,from%20any%20country%20or%20individual."},
{title:"Ethereum founder donates $1 billion to help Covid-hit India", image:"/news2.png", link:"https://www.livemint.com/news/india/crypto-genius-gives-a-billion-dollars-worth-of-joke-coin-for-india-covid-relief-11620892706902.html#:~:text=country%20or%20individual-,Vitalik%20Buterin%2C%20the%2027%2Dyear%2Dold%20founder%20of%20Ethereum,from%20any%20country%20or%20individual."},
{title:"Ethereum Co-Founder Donates Rs. 4.5 Crores For COVID-19 Relief in India", image:"/news3.png", link:"https://www.livemint.com/news/india/crypto-genius-gives-a-billion-dollars-worth-of-joke-coin-for-india-covid-relief-11620892706902.html#:~:text=country%20or%20individual-,Vitalik%20Buterin%2C%20the%2027%2Dyear%2Dold%20founder%20of%20Ethereum,from%20any%20country%20or%20individual."}
]);
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
              <div className={styles.start_now} onClick={clickhandler}>
                <div className={styles.text} >
                  Start a fund raise - It’s Needed
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
          <div className={styles.case_study_content_title}>REAL STORIES</div>
          <div className={styles.case_study_content_subtitle}>
            Crypto bringing the <span>CHANGE</span>
          </div>
        </div>

        <div className={styles.case_study_content_grid}>
          {news.map((ne) => {
            return (
              <a target="_blank" href={ne.link}><div className={styles.case_study_content_each_grid}>
                <img src={ne.image} />
                <div className={styles.case_study_content_each_text}>
                  {ne.title}
                </div>
              </div></a>
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
      <div className={styles.join_hand}>
        <div className={styles.join_hand_text}>
          Spread awareness and raise funds to solve local cause.
        </div>
        <div className={styles.join_hand_center}>
         <div className={styles.start_now} onClick={clickhandler}>
           <div className={styles.text} >
               Start a fund raise - It’s Needed
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
