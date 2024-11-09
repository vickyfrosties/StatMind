import MainMenu from "../../Containers/Menu/MainMenu";
import "/fonts.modules.css";
import styles from "./History.module.css";

const HistoryPage = () => {
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
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
          <div>
            dqsdqsd
          </div>
        </section>

      </section>
      <MainMenu />
    </>
  );
};

export default HistoryPage;