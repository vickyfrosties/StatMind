import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./History.module.css";
import axios from "axios";

const HistoryPage = () => {

  const handleClick = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);

    await axios.get("http://localhost:8000/history")
      .then(result => {
        return console.log(result);
      })
      .catch(error => console.log("Error:", error));

  };

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