import styles from "../../styles/Dashboardhome.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <span>Good Morning</span>
      <br />
      <div className={styles.quick_actions}>
        <span>Quick Actions</span>
        <div className={styles.quick_actions_items}>View My Profile</div>
        <div className={styles.quick_actions_items}>Create New Event</div>
        <div className={styles.quick_actions_items}>Send NewsLetter</div>
        <div className={styles.quick_actions_items}>Sell Credit Pack</div>
      </div>
      <div className={styles.at_a_glance}>
        <span>At a glance</span>
        <div className={styles.at_a_glance_items}>Profile</div>
        <div className={styles.at_a_glance_items}>Revenue </div>
        <div className={styles.at_a_glance_items}>Audience </div>
        <div className={styles.at_a_glance_items}>Event Guests</div>
      </div>
    </div>
  );
};

export default Home;
