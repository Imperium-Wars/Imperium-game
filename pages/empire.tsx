import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";
import styles2 from "../styles/cards.module.css";
import { EmpireType } from "./empire/[empire]";
import Button from "../components/UI/button";

const Empire: NextPage = () => {
  const router = useRouter();
  const empires: EmpireType[] = ["american", "chinese", "french", "ottoman"];

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="flex flex-wrap justify-center">
          {empires.map((empire, index) => (
            <div
              key={index}
              className={`${styles2[empire + "TitleContainer"]} m-2`}
              onClick={() => router.push(`empire/${empire}`)}
            >
              <div className={styles2.blackFilter2}></div>
              <h1 className={styles2.homeTitle}>{empire} Empire</h1>
            </div>
          ))}
        </div>
        <div className="mt-4 z-0">
          <Button size="small" onClick={() => router.push("/")}>
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Empire;
