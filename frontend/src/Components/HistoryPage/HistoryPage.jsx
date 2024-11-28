import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./History.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Containers/Header/Header";
import MediaQuery from "react-responsive";


const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  // to filter the data whether it is by day, week or month
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const filter = e.target.value;
    console.log(filter);
    // TODO: filter the data entries
    if (filter === "DAY") {

    }
    else if (filter === "WEEK") {

    }
    else if (filter === "MONTH") {

    }
    else (console.log("Did not filter the data well")
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem("username");

      try {
        const response = await axios.get("http://localhost:8000/history", { params: { username } });

        if (!username) {
          console.log("There's no username found for those data.");
        }
        // set the history with the current data stored in the database 
        setHistory(response.data);
      }
      catch (error) {
        console.log("Error fetching data history", error);
      }
    };
    fetchData();
  }, []);

  const emotionsIcons = {
    "Happy": "./Icons/smiley.svg",
    "Sad": "./Icons/smiley-sad.svg",
    "Angry": "./Icons/smiley-angry.svg",
    "Disgust": "./Icons/smiley-nervous.svg",
    "Overwhelmed": "./Icons/smiley-melting.svg",
    "Surprised": "./Icons/smiley-surprised.svg",
    "Anxious": "./Icons/smiley-anxious.svg",
  };

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>
      <section className={styles.main_section}>
        <div className={styles.main_container}>
          <h2 className={styles.title}>{localStorage.getItem("username")}'s History</h2>
          <div className={styles.buttons_container}>
            <button value={"DAY"} onClick={handleClick}>DAY</button>
            <button value={"WEEK"} onClick={handleClick}>WEEK</button>
            <button value={"MONTH"} onClick={handleClick}>MONTH</button>
          </div>
        </div>

        <section className={styles.snd_section}>
          <div className={styles.history_container}>
            {history.length === 0 ? (
              <p>No history found.</p>
            ) : (
              <ul>
                {history.map((entry, index) => (
                  <li key={entry._id}>
                    <div className={styles.date_light}>
                      <p>{new Date(entry.createdAt).toString().slice(0, 3).toUpperCase()}</p>
                      <p>{new Date(entry.createdAt).toLocaleDateString("fr-FR")}</p>
                      <p>at {new Date(entry.createdAt).toLocaleTimeString("fr-FR")}</p>
                    </div>

                    <div className={styles.history_info_light}>
                      <div className={styles.icon_emotion}>
                        <img src={emotionsIcons[entry.emotions]} alt={entry.emotions} />
                        <p className={styles.history}>{entry.emotions}</p>
                      </div>

                      <div className={styles.infos}>
                        <p className={styles.history}>{entry.description}</p>
                        <p className={styles.history}>Today's song : {entry.favoriteMusic}</p>
                        <p className={styles.history}>Today's book : {entry.favoriteBook}</p>
                        <p className={styles.history}>{entry.pictureOfTheDay.slice(12)}</p>
                      </div>
                    </div>
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

export default HistoryPage;