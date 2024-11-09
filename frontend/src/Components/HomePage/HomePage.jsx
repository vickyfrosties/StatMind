import { useState } from "react";
import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";

const HomePage = () => {
  const [user, setUser] = useState("vicky");


  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>
      <div className={styles.main_container}>
        <h2>Hi {user}, how do you feel today?</h2>
        <MediaQuery minWidth={550}>
          <img src="/Logo/Colors Wheel.png" alt="Color's Wheel" />
        </MediaQuery>
      </div>

      <MainMenu />
      <MediaQuery minWidth={550}>
        <Footer />

      </MediaQuery>
    </>
  );
};

export default HomePage;