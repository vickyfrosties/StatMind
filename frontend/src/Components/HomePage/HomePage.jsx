import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const username = localStorage.getItem("username");
  const [date, setDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/home", { params: { username } });
        setDate(response.data);
      }
      catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  function getCurrentWeek() {
    const today = new Date();
    const day = today.getDay();
    const startWeek = new Date(today);
    const endWeek = new Date(today);
    // Calculate when it is monday
    startWeek.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
    // Calculate when it is sunday
    endWeek.setDate(startWeek.getDate() + 6);
    return { startWeek, endWeek };
  }

  function getWeekDays(starWeek) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(starWeek.getTime());
      day.setDate(startWeek.getDate() + i);
      days.push(day);
    }
    return days;
  }

  const emotionIcon = {
    "Happy": "./Icons/p-happy.svg",
    "Sad": "./Icons/p-sad.svg",
    "Angry": "./Icons/p-angry.svg",
    "Disgust": "./Icons/p-disgust.svg",
    "Overwhelmed": "./Icons/p-overwhelmed.svg",
    "Surprised": "./Icons/p-surprised.svg",
    "Anxious": "./Icons/p-anxious.svg",
  };

  const { startWeek } = getCurrentWeek();
  const weekDays = getWeekDays(startWeek);

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>

      <section className={styles.main_container}>
        <div className={styles.calendar_container} >

          {weekDays.map((day) => {
            // format the date as YYYY-MM-DD to make it match w date in db
            const dateString = day.toISOString().split("T")[0];
            const today = new Date();
            // format the createdAt field in the db so it matches date in client side
            const entry = date.find((item) => item.createdAt.split("T")[0] === dateString);
            const emotion = entry && entry.emotions.length > 0 ? entry.emotions[0] : null;

            return (
              <div key={dateString} className={styles.date_container}>

                {dateString === new Date().toISOString().split("T")[0] ? (

                  <div className={styles.today}>
                    {/* TODAY'S DATE */}
                    <p>{day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</p>
                    <p>{day.toLocaleDateString("fr-FR", { day: 'numeric', month: 'numeric' })}</p>
                    <div className={styles.today_dot}></div>
                  </div>

                ) : (

                  <div>
                    {/* OTHER DAYS */}
                    <p>{day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</p>
                    <p>{day.toLocaleDateString("fr-FR", { day: 'numeric', month: 'numeric' })}</p>
                  </div>
                )}

                {emotion && (
                  <img src={emotionIcon[emotion]} alt={emotion} className={styles.bullet} />
                )}
              </div>);
          })}
        </div>

        <div className={styles.main}>
          <h2 className={styles.home_title}>Hi {username}, how do you feel today?</h2>
          <img src="/Logo/Colors-Wheel.png" alt="The color wheel, representing the colors of emotions. Each petal represents a color that represents an emotion." />

          <MediaQuery minWidth={550}>
            <button autoFocus >
              <Link to="/form">
                New emotion
              </Link>
            </button>
          </MediaQuery>
        </div>
      </section>

      <MainMenu />
      <MediaQuery minWidth={550}>
        <Footer />
      </MediaQuery>
    </>
  );
};

export default HomePage;