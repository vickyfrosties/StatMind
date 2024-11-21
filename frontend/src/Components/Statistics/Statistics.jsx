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

  useEffect((username) => {
    // get data to use it as statistics 
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/statistics");
        setStatistics(response.data);
        console.log(setStatistics);
      }
      catch (error) {
        console.log("Error with statistics data", error);
      }
    };
    fetchData();
  }, [username]);

  // const series = [
  //   {
  //     name: "Belgium",
  //     data: [
  //       3.9670002, 5.2650003, 6.201,
  //       7.8010006, 9.694, 11.214001,
  //       11.973001, 12.250001, 12.816001,
  //       13.413001, 13.626961, 14.30356,
  //       15.295461,
  //     ],
  //   },
  // ];

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
          <VictoryChart>
            <VictoryScatter size={9} data={[
              {
                x: 1,
                y: 1,
                label: "first",
                symbol: "star",
                opacity: 0.5,
                fill: "blue",
              },
              {
                x: 2,
                y: 2,
                label: "second",
                symbol: "circle",
                opacity: 0.8,
                fill: "red",
              },
              {
                x: 3,
                y: 3,
                label: "third",
                symbol: "square",
                fill: "gold",
              },
              {
                x: 4,
                y: 4,
                label: "fourth",
                symbol: "diamond",
                fill: "green",
              },
            ]} />
            {/* {statistics.length === 0 ? (<p>No statistics found</p>) : (
              statistics.map((data, index) => (
                <VictoryScatter data={statistics[0].emotions.map(
                  (data, index) => ({
                    x: index,
                    y: data
                  })
                )}
                  style={{ data: { fill: 'green' } }} />

              ))
            )} */}

          </VictoryChart>
        </section>
      </section>
      <MainMenu />
    </>
  );
};

export default Statistics;