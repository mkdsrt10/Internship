import styles from "../styles/home.module.css";
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
      <div className={styles.coinContainer}>
        <img src="../image4.png" />
        <img src="../image5.png" />
        <img src="../image6.png" />
        <img src="../image7.png" />

        <img src="../image8.png" />
      </div>
      <div className={styles.what_we_do_container}>
        <div className={styles.what_we_do_container_content}>
          <div className={styles.what_we_do_title}>What we do</div>
          <div className={styles.what_we_do_sub_title}>
            Fundraising for the people and causes you care.
          </div>
          <div className={styles.what_we_do_grid_conatiner}>
            <div className={styles.what_we_do_grid_each}>
              <div>No Boundaries</div>
              <div>
                Raise funds from global audience without any friction, tax or
                international boundaries.
              </div>
            </div>
            <div className={styles.what_we_do_grid_each}>
              <div>All Crypto Accepted</div>
              <div>
                We are providing the advancement of accepting almost all crypto
                around the world.
              </div>
            </div>
            <div className={styles.what_we_do_grid_each}>
              <div>Helping NGOs</div>
              <div>
                We help social workers and NGOs on raising fund around the world
                through blockchain.
              </div>
            </div>
            <div className={styles.what_we_do_grid_each}>
              <div>Spreading Awareness</div>
              <div>
                We are aimed at raising voices for social causes and help in
                fighting poverty, and all other social foes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
