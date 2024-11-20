import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";

const HomePage = () => {
  const username = localStorage.getItem("username");
  const today = new Date().toLocaleDateString("fr-FR").slice(0, 5);
  const day = new Date().toString().slice(0, 3).toUpperCase();
  const start_range = new Date().toLocaleString("").toString();


  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>

      <div className={styles.calendar_container}>
        <div>
          <p>Today's date: {day}</p>
          <p>Today's date: {today}</p>
          <p>Today's date: {start_range}</p>

        </div>
      </div>

      <div className={styles.main_container}>
        <h2>Hi {username}, how do you feel today?</h2>
        <img src="/Logo/Colors-Wheel.png" alt="Color's Wheel" />
      </div>

      <MainMenu />
      <MediaQuery minWidth={550}>
        <Footer />

      </MediaQuery>
    </>
  );
};

export default HomePage;