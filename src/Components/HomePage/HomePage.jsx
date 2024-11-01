import { useState } from "react";
import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";

const HomePage = () => {
  const [user, setUser] = useState("vicky");


  return (
    <>
      <h2>Hi {user}, how do you feel today?</h2>
      <MainMenu />
    </>
  );
};

export default HomePage;