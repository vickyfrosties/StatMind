import { useState } from "react";
import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";

const HomePage = () => {
  const [user, setUser] = useState("vicky");


  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <h2>Hi {user}, how do you feel today?</h2>
        <img src="/public/Logo/Colors Wheel.png" alt="Color's Wheel" />

      </div>
      <MainMenu />
      <Footer />
    </>
  );
};

export default HomePage;