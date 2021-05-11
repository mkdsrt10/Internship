import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Slide from 'react-reveal/Slide';
export default function Home() {
  const [donateList, setDonateList] = useState(["v", "v", "v"]);
  const router = useRouter();
  return (
    <div className className={styles.mainContainer}>

      <Slide left>
      <div className={styles.hero}>
        <div className={styles.vision_heading}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
          similique.
          <div className={styles.vision_sub_heading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            modi illum totam sit distinctio fugit enim voluptates maiores libero
            minima!
          </div>
        </div>
        <div className={styles.top_images_div}>
          <img src={"../1.jpg"} alt="logo" className={styles.top_image}></img>
        </div>
      </div>
      </Slide>
      <div className={styles.contribute_title}>Contribute here</div>
      
      <div className={styles.donate}>
        {donateList.map((post, index) => {
          return (
            <Slide bottom>
            <div
              className={styles.postContainer}
              key={index}
              onClick={() => {
                router.push("/blogs");
              }}
            >
              <img src={"../1.jpg"} alt="image" className={styles.postContainer_image}/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                quam temporibus aspernatur veritatis eveniet dignissimos,
                voluptatibus laudantium consectetur unde repellendus!
              </p>
            </div>
            </Slide>
          );
        })}
      </div>
      <Slide left>
      <div className={styles.how_we_do_this_title}>How we do this</div>
      <div className={styles.how_we_do_this_container}>
          <img
            src={"../1.jpg"}
            alt="image"
            className={styles.how_we_do_this_image}
            />
      
        <div className={styles.how_we_do_this_content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo
          non quia soluta dolores. Culpa ex, odit cum praesentium voluptatibus
          labore minima? Soluta excepturi repudiandae nobis velit, quasi
          praesentium exercitationem id quia consequuntur maiores sit quis
          doloribus nam. Nihil, odit omnis. Odio voluptatibus a illum impedit
          possimus quaerat voluptatem nam.
        </div>
      </div>
      </Slide>
    </div>
  );
}
