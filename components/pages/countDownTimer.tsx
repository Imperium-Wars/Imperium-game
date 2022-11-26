import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "../../styles/countDownTimer.module.css";

export const countDownDate = new Date("Nov 16, 2022 11:29:35").getTime();

const CountDownTimer: NextPage = () => {
  const [dateToShow, setDateToShow] = useState<number[]>([]);

  useEffect(() => {
    window.setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDateToShow([days, hours, minutes, seconds]);
    }, 1000);
  }, [dateToShow]);

  return dateToShow.filter((element) => Boolean(element)).length === 0 ? (
    <div className={styles.container}>
      <p className={styles.legend}>Mainnet is coming in </p>
      <h1
        className={styles.title}
      >{`${dateToShow[0]}d ${dateToShow[1]}h ${dateToShow[2]}m ${dateToShow[3]}s`}</h1>
    </div>
  ) : (
    <></>
  );
};

export default CountDownTimer;
