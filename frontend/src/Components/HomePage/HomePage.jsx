import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";
import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-dom";

const HomePage = () => {
  const username = localStorage.getItem("username");
  const today = new Date().toLocaleDateString("fr-FR").slice(0, 5);

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>

      <section className={styles.main_container}>
        <div className={styles.main}>
          <h2>Hi {username}, how do you feel today?</h2>
          <img src="/Logo/Colors-Wheel.png" alt="Color's Wheel" />
          <button autoFocus >
            <Link to="/form">
              New emotion
            </Link></button>
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