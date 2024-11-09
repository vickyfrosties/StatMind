import MainMenu from "../../Containers/Menu/MainMenu";
import styles from "./Main.module.css";

const MainForm = () => {

  return (
    <>
      <section className={styles.first_section}>
        <h3>I feel...</h3>
        <div className={styles.btn_container}>
          <button><img src="/public/Icons/smiley.svg" alt="Happy icon" />Happy</button>
          <button>Sad</button>
          <button>Angry</button>
          <button>Disgust</button>
          <button>Surprised</button>
          <button>Overwhelmed</button>
          <button>Anxious</button>
        </div>
        <h3>Because of....</h3>

        <form className={styles.mood_form} action="">
          <textarea className={styles.description} name="description" id="description"></textarea>
          <p>Any music today ?</p>
          <input className={styles.music_input} type="text" />
          <p>Any book you read today ?</p>
          <input className={styles.book_input} type="text" />
          <p>Today's picture</p>
          <input className={styles.picture_input} type="file" />


        </form>
      </section>
      <MainMenu />
    </>
  );
};

export default MainForm;