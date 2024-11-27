import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Calendar.modules.css";

const HomePage = () => {
  const username = localStorage.getItem("username");
  const today = new Date().toLocaleDateString("fr-FR").slice(0, 5);
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
    // get day by number 0 = Sunday
    const day = today.getDay();
    const startWeek = new Date(today);
    const endWeek = new Date(today);

    // Monday
    startWeek.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
    // Sunday
    endWeek.setDate(startWeek.getDate() + 6);

    return { startWeek, endWeek };
  }

  const { startWeek, endWeek } = getCurrentWeek();

  function getWeekDays(starWeek) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(starWeek);
      day.setDate(startWeek.getDate() + i); // Add days to startOfWeek
      days.push(day);
    }
    return days;
  }
  const weekDays = getWeekDays(startWeek);

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>

      <section className={styles.main_container}>

        <div className={styles.calendar_container} >
          {weekDays.map((day) => (
            <div key={day.toDateString()} className={styles.date_container}>
              <p>{day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
              </p>
              <img src="" alt="" />
              <p>{day.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })}
              </p>
              <img src="" alt="" />

            </div>
          ))}
        </div>

        <div className={styles.main}>
          <h2>Hi {username}, how do you feel today?</h2>
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