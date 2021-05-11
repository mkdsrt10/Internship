import styles from "../../styles/About.module.css";
import TeamMember from "../../components/TeamMember";
import Slide from "react-reveal/Slide"
const team = ["vipin", "vipn", "vipin"];
const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="2.jpg" alt="logo" className={styles.top_image_div}></img>
      </div>
      <div className={styles.image_title}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aliquid
        inventore qui odit. Voluptas, sed vero quo illo quasi quod.
      </div>
      <Slide bottom>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          nostrum, doloribus perferendis quo cum explicabo quidem iure illo quam
          odit, maxime fugit rem neque, amet incidunt aut assumenda eaque? Est
          necessitatibus minima repudiandae delectus incidunt et, maiores eos
          perspiciatis voluptatem beatae natus quas vel doloremque vero nam
          repellat cumque sint earum tenetur cum libero aliquid. Quo dicta
          quibusdam tempora quidem veniam non expedita quis necessitatibus
          sequi, voluptatem eius illum itaque aliquam ab, tempore beatae aperiam
          ipsam nam hic! Ipsam atque necessitatibus ducimus. Magnam modi
          deserunt vel, quisquam animi pariatur quia vitae illo doloribus
          dolores alias inventore reprehenderit harum reiciendis voluptas soluta
          necessitatibus recusandae repellat maiores deleniti quaerat commodi
          impedit. Totam numquam tempora dolorum dicta et error maiores sunt,
          quisquam sint possimus facere placeat laudantium cumque commodi
          aspernatur quos asperiores ipsam voluptas saepe expedita esse sequi
          quo quod nostrum? Eveniet nemo quisquam, eaque accusamus repellat odit
          consectetur, quas rerum dicta aperiam obcaecati voluptatem impedit
          excepturi at enim. Facilis ad ipsa ex velit delectus, quibusdam
          impedit nulla distinctio architecto dicta soluta animi laboriosam
          placeat odio magnam exercitationem dolore eius harum blanditiis
          cupiditate totam? Tempora vero commodi rerum sed qui dolorem
          doloremque, consectetur numquam quod molestiae, delectus laboriosam
          asperiores laborum fugit omnis accusamus?
        </div>
      </Slide>
      <div className={styles.TeamMember_title}>Team Members</div>
      <div className="team_members_container">
        {team.map((member) => {
          return <TeamMember />;
        })}
      </div>
    </div>
  );
};

export default About;
