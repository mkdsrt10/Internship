import styles from "../styles/TeamMember.module.css";

import Slide from "react-reveal/Slide";
const TeamMember = () => {
  return (
    <div className={styles.TeamMember_container}>
      <Slide bottom>
        <div className={styles.TeamMember_profile}>
          <img src="1.jpg" className={styles.TeamMember_image} />
          <div className={styles.TeamMember_Name}>Vipin jaluthria</div>
        </div>

        <div className={styles.TeamMember_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ducimus quod rerum, officiis ut nobis dolorum laborum vel quidem
          explicabo fugit repudiandae quasi, nostrum quisquam sequi enim,
          quaerat
          <br />
          error libero dolor. Error a sequi, similique ut itaque explicabo atque
          aliquid ipsam debitis, consectetur doloremque enim voluptate, qui
          tempora harum! Voluptas distinctio nostrum fugit cumque voluptates
          ratione perferendis eveniet similique reprehenderit facere laboriosam
          non vel quibusdam modi corrupti, perspiciatis nam suscipit excepturi
          quos? Nostrum harum sequi doloremque labore earum. Sit deleniti
          itaque,
          <br />
          molestias quam impedit asperiores tenetur maiores dolore ad cumque
          illo, facilis dignissimos quas voluptatibus eum consequatur quis ab
          quidem.
        </div>
      </Slide>
    </div>
  );
};

export default TeamMember;
