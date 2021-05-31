import { useState } from "react";
import styles from "../../styles/Foryou.module.css";
const For_you = () => {
  
  const data = ["v", "v", "v", "v", "v", "v"];
  return (
  <div>
    <div className={styles.For_you}>
      <div className={styles.For_you_title}>For You</div>
      <div className={styles.For_you_subtitle}>
        Stories from around the globe how they are using crypto for social cause
      </div>
    </div>
    <div className={styles.For_you_grid}>
      {data.map((e) => {
        return (
          <div className={styles.grid_each}>
            <img src="/girl_mobile.png" />
            <div className={styles.grid_title}>
              Built school Playground in Sohagpur
            </div>
            <div className={styles.grid_description}>
              Stories from around the globe how they are using crypto for social
              cause
            </div>
            <div className={styles.read_more}>Read more {">>"}</div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default For_you;
