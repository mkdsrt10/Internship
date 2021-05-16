import styles from "../../styles/Fundraise.module.css";
import { useRouter } from "next/router";
const Fundraise = () => {
    const router=useRouter();
    const NgoClickHandler=(e)=>{
        router.push("/ngo");
    }
    const IndividualClickHandler=(e)=>{
        router.push("/ngo");

    }
  return (
    <div className={styles.main_container}>
      <div className={styles.Ngo_container}>
        <span>NGO </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        blanditiis magni corrupti laborum aperiam eum molestias, aspernatur
        magnam ipsum in?
        <button onClick={NgoClickHandler}>Lets go</button>
      </div>
      <div className={styles.Individual_container}>
        <span>Individual</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        blanditiis magni corrupti laborum aperiam eum molestias, aspernatur
        magnam ipsum in?
        <button onClick={IndividualClickHandler}>Lets go</button>
      </div>
    </div>
  );
};

export default Fundraise;
