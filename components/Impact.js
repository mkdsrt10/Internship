import styles from "../styles/Impact.module.css";
const Impact = () => {
  return (
    <div className={styles.Impact_container}>
      <div className={styles.Impact_cotent_conainer}>
        <div className={styles.Impact_content_left}>
          <div className={styles.Impact_content_left_title}>
            WE CAN IMPACT MILLIONS
          </div>
          <div className={styles.Impact_content_left_subtitle}>
            Helping Today. Helping Tomorrow.
          </div>
          <div className={styles.Impact_content_right_mobile}></div>
          <div className={styles.Impact_cotent_grid}>
            <div className={styles.Impact_cotent_each_grid}>
              <div
                className={styles.Impact_cotent_each_grid_top}
                style={{ borderLeft: "5px solid #7BD5AA" }}
              >
                100 M+
              </div>
              <div className={styles.Impact_cotent_each_grid_bottom}>
                people can be impacted around the world
              </div>
            </div>
            <div className={styles.Impact_cotent_each_grid}>
              <div
                className={styles.Impact_cotent_each_grid_top}
                style={{ borderLeft: "5px solid #EF7C6E" }}
              >
                $10B+
              </div>
              <div className={styles.Impact_cotent_each_grid_bottom}>
                funds raised by NGOs and social workers
              </div>
            </div>
            <div className={styles.Impact_cotent_each_grid}>
              <div
                className={styles.Impact_cotent_each_grid_top}
                style={{ borderLeft: "5px solid #6662A6" }}
              >
                100+
              </div>
              <div className={styles.Impact_cotent_each_grid_bottom}>
                NGOs can use our platform around the globe
              </div>
            </div>
            <div className={styles.Impact_cotent_each_grid}>
              <div
                className={styles.Impact_cotent_each_grid_top}
                style={{ borderLeft: "5px solid  #F4D072" }}
              >
                50+
              </div>
              <div className={styles.Impact_cotent_each_grid_bottom}>
                countries can get benefitted by our service{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Impact_content_right}></div>
      </div>
    </div>
  );
};

export default Impact;
