import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./Statistics.module.css";
import { useState } from "react";


const Statistics = () => {

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <>
      <section className={styles.main_section}>
        <h2 className={styles.title}>Statistics</h2>

        <div className={styles.buttons_container}>
          <button value={"DAY"} onClick={handleClick}>DAY</button>
          <button value={"WEEK"} onClick={handleClick}>WEEK</button>
          <button value={"MONTH"} onClick={handleClick}>MONTH</button>
        </div>

        <section className={styles.stats_container}>

        </section>
      </section>
      <MainMenu />
    </>
  );
};

export default Statistics;