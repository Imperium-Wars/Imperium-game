import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../components/UI/button";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.blackFilter}></div>
      <div className={styles.main}>
        <div className="centerContainer">
          <h1 className={styles.homeTitle}>Imperium Wars</h1>
          <Button onClick={() => router.push("/explore")}>
            Explore the map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
