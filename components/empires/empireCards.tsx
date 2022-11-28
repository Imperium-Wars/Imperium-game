/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { EmpireType } from "../../pages/empire/[empire]";
import styles from "../../styles/cards.module.css";
import Button from "../UI/button";

type EmpireCardsProps = {
  empire: EmpireType;
};

const EmpireCards: NextPage<EmpireCardsProps> = ({ empire }) => {
  const router = useRouter();

  return (
    <div className={styles[empire + "CardsPage"]}>
      <div className={styles.blackFilter}></div>
      <div className={styles[empire + "TitleContainer"]}>
        <div className={styles.blackFilter2}></div>
        <h1 className={styles.homeTitle}>{empire} Empire</h1>
      </div>
      <div className={styles.cardsContainer}>
        <img
          className={styles.card}
          width={230}
          src={`/cards/${empire}/Infantry.jpg`}
          alt={`${empire} infantry`}
        />
        <img
          className={styles.card}
          width={230}
          src={`/cards/${empire}/Artillery.jpg`}
          alt={`${empire} cavalry`}
        />
        <img
          className={styles.card}
          width={230}
          src={`/cards/${empire}/Cavalry.jpg`}
          alt={`${empire} artillery`}
        />
        <img
          className={styles.card}
          width={230}
          src={`/cards/${empire}/Commandant.jpg`}
          alt={`${empire} commandant`}
        />
        <img
          width={230}
          className={styles.card}
          src={`/cards/${empire}/Marshall.jpg`}
          alt={`${empire} marshall`}
        />
      </div>
      <div className="mt-4 mb-4">
        <Button size="small" onClick={() => router.push("/empire")}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default EmpireCards;
