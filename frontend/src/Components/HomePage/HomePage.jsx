import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const username = localStorage.getItem("username");
  const today = new Date().toLocaleDateString("fr-FR").slice(0, 5);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const matchDate = async () => {
      try {
        const response = await axios.get("http://localhost:8000/home");
        setDate(response.data);
      }
      catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    matchDate();
  }, []);

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>

      <section className={styles.main_container}>
        <div className={styles.calendar_container}>
          <Calendar
            view="month"
            showNavigation={false}

            formatShortWeekday={(locale, date) => date.toLocaleString("en-US", { weekday: 'short' }).toUpperCase()}
          />
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