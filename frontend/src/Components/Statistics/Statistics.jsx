import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./Statistics.module.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme, VictoryAxis,
  VictoryScatter
} from "victory";
import { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  const username = localStorage.getItem("username");

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  // get data to use it as statistics 
  useEffect((username) => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/statistics");
        console.log("API response:", response);
        const formattedData = statistics.map(stats => ({
          x: stats.createdAt,
          y: stats.emotion,
          label: stats.username
        }));
        console.log("Data formatted:", formattedData);
        setStatistics(formattedData);

      }
      catch (error) {
        console.log("Error with statistics data", error);
      }
    };
    fetchData();
  }, [username]);

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
          <VictoryChart domainPadding={{ x: 20 }}
            theme={VictoryTheme.clean}>
            <VictoryBar data={statistics} />
          </VictoryChart>
        </section>
      </section>
      <MainMenu />
    </>
  );
};

export default Statistics;