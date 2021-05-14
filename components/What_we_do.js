import styles from "../styles/What_we_do.module.css";
const what_we_do_container = () => {
  return (
    <div className={styles.what_we_do_container}>
      <div className={styles.what_we_do_container_content}>
        <div className={styles.what_we_do_title}>What we do</div>
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
                <img src="../Ellipse11.png" />
              </div>
              <div className={styles.what_we_do_topic}>All Crypto Accepted</div>
            </div>
            <div className={styles.what_we_do_text}>
              We are providing the advancement of accepting almost all crypto
              around the world.
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
              through blockchain.
            </div>
          </div>
          <div className={styles.what_we_do_grid_each}>
            <div className={styles.what_we_do_grid_each_top}>
              <div
                className={styles.what_we_do_image}
                style={{ borderBottom: "4px solid #F4D072" }}
              >
                <img src="../Ellipse11.png" />
              </div>
              <div className={styles.what_we_do_topic}>Spreading Awareness</div>
            </div>
            <div className={styles.what_we_do_text}>
              We are aimed at raising voices for social causes and help in
              fighting poverty, and all other social foes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default what_we_do_container;
