import styles from "../../styles/Fundraise.module.css";
import { useRouter } from "next/router";
const Fundraise = () => {
    const router=useRouter();
    const NgoClickHandler=(e)=>{
        router.push("/auth/profile");
    }
    const IndividualClickHandler=(e)=>{
        router.push("/fundraise/Individualform");

    }
  return (
    <div className={styles.main_container}>
      <div className={styles.Ngo_container}>
        <button className={styles.ngo_button} onClick={NgoClickHandler}>Are you an NGO?</button>
          <div className={styles.individual} onClick={IndividualClickHandler}>
              If an individual click here.
          </div>
      </div>
    </div>
  );
};

export default Fundraise;
