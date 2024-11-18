import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./History.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const [data, setData] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/history");
        const data = response.data;
        setData({
          username: data.username,
          emotions: data.emotions,
          description: data.description,
          favoriteMusic: data.favoriteMusic,
          favoriteBook: data.favoriteBook,
          pictureOfTheDay: data.pictureOfTheDay,
          createdAt: data.createdAt
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }
    , []);
  return (
    <>
      <section className={styles.main_section}>
        <h2 className={styles.title}>History</h2>
        <div className={styles.buttons_container}>
          <button value={"DAY"} onClick={handleClick}>DAY</button>
          <button value={"WEEK"} onClick={handleClick}>WEEK</button>
          <button value={"MONTH"} onClick={handleClick}>MONTH</button>
        </div>

        <section className={styles.snd_section}>
          <div className={styles.date}>
            <h3>18/11</h3>
          </div>
          <div className={styles.history}>
            <h3>
              I felt blablablablu
            </h3>
          </div>
        </section>

      </section>
      <MainMenu />
    </>
  );
};

export default HistoryPage;