/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/cards.module.css";
import { useEffect, useState } from "react";
import MusicPlayer from "../components/UI/musicPlayer";
import { Music } from "./explore";

const Cards: NextPage = () => {
  const [music, setMusic] = useState<Music | undefined>(undefined);

  useEffect(() => {
    setMusic({
      song: new Audio(
        "https://imperium-game.vercel.app/music/ValseSentimentale.mp3"
      ),
      songName: "Valse Sentimentale | Tchaikovsky",
    }); // only call client
  }, []);

  return (
    <div className={styles.cardsPage}>
      <div className={styles.empireContainer}>
        <div className={styles.frenchEmpire}>
          <h1 className={styles.homeTitle}>French Empire</h1>
        </div>
        <div className={styles.cardsContainer}>
          <div className={`${styles.cardAnimated} ${styles.Napoleon}`}></div>
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchMarshall.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchCommandant.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
        </div>
      </div>
      <div className={styles.empireContainer}>
        <div className={styles.ottomanEmpire}>
          <h1 className={styles.homeTitle}>Ottoman Empire</h1>
        </div>
        <div className={styles.cardsContainer}>
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchMarshall.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchCommandant.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
        </div>
      </div>
      <div className={styles.empireContainer}>
        <div className={styles.americanEmpire}>
          <h1 className={styles.homeTitle}>American Empire</h1>
        </div>
        <div className={styles.cardsContainer}>
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchMarshall.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchCommandant.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
        </div>
      </div>
      <div className={styles.empireContainer}>
        <div className={styles.chineseEmpire}>
          <h1 className={styles.homeTitle}>Chinese Empire</h1>
        </div>
        <div className={styles.cardsContainer}>
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchMarshall.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchCommandant.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
          <img
            className={styles.card}
            height={350}
            src="/cards/frenchInfantry.jpg"
            alt="french commandant"
          />
        </div>
      </div>
      <MusicPlayer music={music} />
    </div>
  );
};

export default Cards;
