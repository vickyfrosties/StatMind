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
        // set the history
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
          <div>
            {history.length === 0 ? (
              <p>No history found.</p>
            ) : (
              <ul>
                {history.map((entry, index) => (
                  <li key={entry._id}>
                    <p><strong>Date:</strong> {new Date(entry.createdAt).toLocaleString()}</p>
                    <p><strong>Description:</strong> {entry.description}</p>
                    <p><strong>Favorite Music:</strong> {entry.favoriteMusic}</p>
                    <p><strong>Favorite Book:</strong> {entry.favoriteBook}</p>
                    <p><strong>Picture of the Day:</strong> {entry.pictureOfTheDay}</p>
                    <p><strong>Emotions:</strong> {entry.emotions.join(', ')}</p>
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