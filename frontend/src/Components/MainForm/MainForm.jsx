import MainMenu from "../../Containers/Menu/MainMenu";
import styles from "./Main.module.css";

const MainForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  return (
    <>
      <section className={styles.first_section}>
        <h3>I feel...</h3>
        <div className={styles.btn_container}>
          <button value={"Happy"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#FDD012" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>
            Happy
          </button>

          <button value={"Sad"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#0C5BC1" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path></svg>
            Sad
          </button>

          <button value={"Angry"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#AC0808" viewBox="0 0 256 256"><path d="M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z"></path></svg>
            Angry
          </button>


          <button value={"Disgust"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#266813" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Zm32,60a8,8,0,0,1-8,8c-10,0-15.06-6.74-18.4-11.2-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C143.06,169.26,138,176,128,176s-15.06-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C95.06,169.26,90,176,80,176a8,8,0,0,1,0-16c1.68,0,2.57-.76,5.6-4.8C88.94,150.74,94,144,104,144s15.06,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8s2.57-.76,5.6-4.8c3.34-4.46,8.4-11.2,18.4-11.2s15.06,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8A8,8,0,0,1,184,168Z"></path></svg>
            Disgust
          </button>

          <button value={"Surprised"} onClick={handleClick}>Surprised</button>

          <button value={"Overwhelmed"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm61.66-93.66a8,8,0,0,1-11.32,11.32L168,123.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L156.69,112l-10.35-10.34a8,8,0,0,1,11.32-11.32L168,100.69l10.34-10.35a8,8,0,0,1,11.32,11.32L179.31,112Zm-80-20.68L99.31,112l10.35,10.34a8,8,0,0,1-11.32,11.32L88,123.31,77.66,133.66a8,8,0,0,1-11.32-11.32L76.69,112,66.34,101.66A8,8,0,0,1,77.66,90.34L88,100.69,98.34,90.34a8,8,0,0,1,11.32,11.32ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>
            Overwhelmed
          </button>

          <button value={"Anxious"} onClick={handleClick}>Anxious</button>
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