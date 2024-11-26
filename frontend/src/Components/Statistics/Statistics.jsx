import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./Statistics.module.css";
import {
  VictoryChart,
  VictoryTheme, VictoryAxis,
  VictoryScatter,
  VictoryLegend
} from "victory";
import { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  // Y axis
  const emotionScale = {
    'Very Negative': 1,
    "Negative": 2,
    "Positive": 3,
    'Very Positive': 4,
  };

  // X axis
  const timeScale = {
    '6AM': 1,
    "12PM": 2,
    "4PM": 3,
    '8PM': 4,
  };

  // get data to use it as statistics 
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchData = async () => {
        const username = localStorage.getItem("username");
        try {
          const response = await axios.get("http://localhost:8000/statistics", { params: { username } });
          console.log('Sent username:', username);

          // formating the response data as right values to display them easily
          const formattedData = response.data.map((item) => {
            const date = new Date(item.createdAt);
            const timeKey = formatTime(date);

            return {
              x: timeScale[timeKey] || 0,
              y: emotionScale[mapEmotionToCategory(item.emotions[0])] || 0,
              color: emotionColors[item.emotions[0]] || gray
            };
          });
          setChartData(formattedData);
          console.log(formattedData);
        }

        catch (error) {
          console.error('Error fetching data:', error);
        }
        finally {
          setLoading(false);
        }
      };
      console.log('This will be called every 2 seconds');
      fetchData();
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  // format the date
  const formatTime = (date) => {
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) return '6AM';
    if (hours >= 12 && hours < 16) return '12PM';
    if (hours >= 16 && hours < 20) return '4PM';
    if (hours >= 20 || hours < 6) return '8PM';
    return 'Unknown';
  };

  const mapEmotionToCategory = (emotion) => {
    const emotionMapping = {
      Happy: 'Very Positive',
      Excited: 'Very Positive',
      Sad: 'Negative',
      Angry: 'Very Negative',
      Overwhelmed: 'Negative',
      Surprised: 'Negative',
      Disgust: 'Negative',
    };
    return emotionMapping[emotion] || 'Unknown';
  };

  const emotionColors = {
    Happy: "#FDD012",
    Sad: "#0C5BC1",
    Angry: "#AC0808",
    Disgust: "#266813",
    Overwhelmed: "#6D6D6D",
    Surprised: "#078CB3",
    Anxious: "#E4572E",
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
          <VictoryChart
            domain={{ x: [0, 4] }}
            width={450} height={375}
            theme={VictoryTheme.material}>

            <VictoryAxis
              // values for times
              tickValues={Object.values(timeScale)}
              // labels for times
              tickFormat={Object.keys(timeScale)}
            />
            <VictoryAxis
              dependentAxis
              tickValues={Object.values(emotionScale)}
              tickFormat={Object.keys(emotionScale)}
            />

            <VictoryScatter
              data={chartData}
              size={7}
              style={{ data: { fill: ({ datum }) => datum.color } }}
            />
          </VictoryChart>
          <div>
            <VictoryLegend
              x={15} y={10} itemsPerRow={2}
              data={[
                {
                  name: "Happy",
                  symbol: { fill: "#FDD012" },
                },
                {
                  name: "Sad",
                  symbol: { fill: "#0C5BC1" },
                },
                {
                  name: "Angry",
                  symbol: { fill: "#AC0808" },
                },
                {
                  name: "Disgust",
                  symbol: { fill: "#266813" },
                },
                {
                  name: "Overwhelmed",
                  symbol: { fill: "#6D6D6D" },
                },
                {
                  name: "Surprised",
                  symbol: { fill: "#078CB3" },
                },
                {
                  name: "Anxious",
                  symbol: { fill: "#E4572E" },
                },
              ]}
            />
          </div>
        </section>
      </section>
      <MainMenu />
    </>
  );
};

export default Statistics;