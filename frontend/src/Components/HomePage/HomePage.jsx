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
        console.log(response.data);
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
    // Monday
    startWeek.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
    // Sunday
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
    Happy: { icon: "./Icons/p-happy.svg" },
    Sad: { icon: "./Icons/p-sad.svg" },
    Angry: { icon: "./Icons/p-angry.svg" },
    Disgust: { icon: "./Icons/p-nervous.svg" },
    Overwhelmed: { icon: "./Icons/p-melting.svg" },
    Surprised: { icon: "./Icons/p-surprised.svg" },
    Anxious: { icon: "./Icons/p-melting.svg" },
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
            const dateString = day.toISOString().split("T")[0];
            const emotion = date[dateString]?.emotion;
            const today = new Date().toLocaleDateString("fr-FR");
            const isToday = dateString === today;
            const emotionData = emotion ? emotionIcon[emotion] : null;

            return (
              <div key={dateString} className={styles.date_container}>
                <p>{day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</p>
                <p>{day.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })}</p>

                {emotionData ? (
                  <span>
                    <img src={emotionData.icon} alt={emotion} />
                  </span>
                ) : (
                  <span className={styles.no_data_dot}></span>
                )}
                {isToday && <span className={styles.today_dot}></span>}
              </div>);
          })}
        </div>



        <div className={styles.main}>
          <h2 className={styles.home_title}>Hi {username}, how do you feel today?</h2>
          <img src="/Logo/Colors-Wheel.png" alt="Color's Wheel" />

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