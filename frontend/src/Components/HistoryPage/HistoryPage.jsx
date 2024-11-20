import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./History.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  // const [data, setData] = useState();
  const [history, setHistory] = useState([]);
  const username = localStorage.getItem("username");

  const handleClick = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  useEffect((username) => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/history");
        // set the history with the current data stored in the database 
        setHistory(response.data);
      } catch (error) {
        console.log("Error fetching data history", error);
      }
    };
    fetchData();
  }, [username]);

  return (
    <>
      <section className={styles.main_section}>
        <h2 className={styles.title}>{username}'s History</h2>
        <div className={styles.buttons_container}>
          <button value={"DAY"} onClick={handleClick}>DAY</button>
          <button value={"WEEK"} onClick={handleClick}>WEEK</button>
          <button value={"MONTH"} onClick={handleClick}>MONTH</button>
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
                      <p className={styles.history}>{entry.emotions}</p>
                      <p className={styles.history}>{entry.description}</p>
                      <p className={styles.history}>{entry.favoriteMusic}</p>
                      <p className={styles.history}>{entry.favoriteBook}</p>
                      <p className={styles.history}>{entry.pictureOfTheDay}</p>
                      <p className={styles.history}>{entry.emotions.join(', ')}</p>
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