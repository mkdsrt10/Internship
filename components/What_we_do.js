import styles from "../styles/What_we_do.module.css";
const what_we_do_container = () => {
  return (
    <div className={styles.what_we_do_container}>
      <div className={styles.what_we_do_container_content}>
        <div className={styles.what_we_do_title}>WHAT WE DO</div>
        <div className={styles.what_we_do_sub_title}>
          Fundraising for the people and causes you care.
        </div>
        <div className={styles.what_we_do_grid_conatiner}>
          <div className={styles.what_we_do_grid_each}>
            <div className={styles.what_we_do_grid_each_top}>
              <div
                className={styles.what_we_do_image}
                style={{ borderBottom: "4px solid #7BD5AA" }}
              >
                <img src="../Ellipse11.png" />
              </div>
              <div className={styles.what_we_do_topic}>No Boundaries</div>
            </div>
            <div className={styles.what_we_do_text}>
              Raise funds from global audience without any friction, tax or
              international boundaries.
            </div>
          </div>
          <div className={styles.what_we_do_grid_each}>
            <div className={styles.what_we_do_grid_each_top}>
              <div
                className={styles.what_we_do_image}
                style={{ borderBottom: "4px solid #EF7C6E" }}
              >
                <img src="../allcrypto.png" />
              </div>
              <div className={styles.what_we_do_topic}>All Crypto Accepted</div>
            </div>
            <div className={styles.what_we_do_text}>
              Don't want volatile coin, use stable coins to raise fund. Choose your coins and raise money in them.
            </div>
          </div>
          <div className={styles.what_we_do_grid_each}>
            <div className={styles.what_we_do_grid_each_top}>
              <div
                className={styles.what_we_do_image}
                style={{ borderBottom: "4px solid #6662A6" }}
              >
                <img src="../Ellipse13.png" />
              </div>
              <div className={styles.what_we_do_topic}>Helping NGOs</div>
            </div>
            <div className={styles.what_we_do_text}>
              We help social workers and NGOs on raising fund around the world
              through blockchain: tokens, NFTs and smart contracts.
            </div>
          </div>
          <div className={styles.what_we_do_grid_each}>
            <div className={styles.what_we_do_grid_each_top}>
              <div
                className={styles.what_we_do_image}
                style={{ borderBottom: "4px solid #F4D072" }}
              >
                <img src="../awarness.png" />
              </div>
              <div className={styles.what_we_do_topic}>Spreading Awareness</div>
            </div>
            <div className={styles.what_we_do_text}>
              Keep in touch with your donors and supporters with regular updates about work and new causes you are solving.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default what_we_do_container;
