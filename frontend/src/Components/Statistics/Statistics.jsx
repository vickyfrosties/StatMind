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
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  // get data to use it as statistics 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/statistics");
        console.log('Fetched data:', response.data);
        setStats(response.data);
        if (Array.isArray(response.data)) {
          setStats(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setError("Invalid data format from server.");
        }
      }
      catch (error) {
        // console.log("Error with statistics data", error);
        setError('Error fetching data: ' + error.message);
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


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
          <VictoryChart theme={VictoryTheme.clean}>
            {/* x axis */}
            <VictoryAxis
              label="Day's week"
              tickValues={days}
              tickFormat={days}
            />

            {/* y axis */}
            <VictoryAxis
              label="Time of the day"
              dependentAxis
              tickValues={[0, 6, 12, 18, 24]}
              tickFormat={(t) => `${t}:00`}
            />
            <VictoryScatter x="day" y="time" size={7} data={ } />
          </VictoryChart>

          <div>
            {loading ? (
              <p>Loading data...</p>
            ) : error ? (
              <p>{error}</p>
            ) : stats.length === 0 ? (
              <p>No data found.</p>
            ) : (
              <ul>
                {stats.map((entry) => (
                  <li key={entry._id}>
                    <p><strong>Username:</strong> {entry.username}</p>
                    <p><strong>Emotions:</strong> {entry.emotions.join(", ")}</p>
                    <p><strong>Created At:</strong> {new Date(entry.createdAt).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

      </section>
      <MainMenu />
    </>
  );
};

export default Statistics;