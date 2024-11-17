import axios from "axios";
import MainMenu from "../../Containers/Menu/MainMenu";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainForm = () => {

  const [description, setDescription] = useState("");
  const [favoriteMusic, setFavoriteMusic] = useState("");
  const [favoriteBook, setFavoriteBook] = useState("");
  const [pictureOfTheDay, setPictureOfTheDay] = useState("");
  const [emotions, setEmotions] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmotions(value);
    console.log("Selected emotion:", value);
    setIsClicked((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/form", { username, description, favoriteMusic, favoriteBook, pictureOfTheDay, emotions: [emotions] })

      .then(result => {
        console.log("Request response:", result);
      })
      .catch(error => console.log("Error:", error));
  };

  const username = localStorage.getItem("username");

  return (
    <>
      <section className={styles.first_section}>
        <h3>I feel...</h3>
        <div className={styles.btn_container}>
          <button className={isClicked ? styles.happy_clicked : styles.button_unclicked} value={"Happy"} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#FDD012" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path>
            </svg>
            Happy
          </button>

          <button className={isClicked ? styles.sad_clicked : styles.button_unclicked} value={"Sad"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#0C5BC1" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path></svg>
            Sad
          </button>

          <button className={isClicked ? styles.angry_clicked : styles.button_unclicked} value={"Angry"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#AC0808" viewBox="0 0 256 256"><path d="M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z"></path></svg>
            Angry
          </button>


          <button className={isClicked ? styles.disgust_clicked : styles.button_unclicked} value={"Disgust"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#266813" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Zm32,60a8,8,0,0,1-8,8c-10,0-15.06-6.74-18.4-11.2-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C143.06,169.26,138,176,128,176s-15.06-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C95.06,169.26,90,176,80,176a8,8,0,0,1,0-16c1.68,0,2.57-.76,5.6-4.8C88.94,150.74,94,144,104,144s15.06,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8s2.57-.76,5.6-4.8c3.34-4.46,8.4-11.2,18.4-11.2s15.06,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8A8,8,0,0,1,184,168Z"></path></svg>
            Disgust
          </button>

          <button className={isClicked ? styles.surprised_clicked : styles.button_unclicked} value={"Surprised"} onClick={handleClick}>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.75 22.75" width="32" height="32">
              <defs>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                <path className={styles.cls_1} d="M11.38,0C5.09,0,0,5.09,0,11.38s5.09,11.38,11.38,11.38,11.38-5.09,11.38-11.38C22.74,5.1,17.65,0,11.38,0ZM11.38,21c-5.32,0-9.62-4.31-9.62-9.62S6.06,1.75,11.38,1.75s9.62,4.31,9.62,9.62c0,5.31-4.31,9.62-9.62,9.62ZM6.12,9.19c0-.72.59-1.31,1.31-1.31s1.31.59,1.31,1.31-.59,1.31-1.31,1.31-1.31-.59-1.31-1.31ZM16.62,9.19c0,.72-.59,1.31-1.31,1.31s-1.31-.59-1.31-1.31.59-1.31,1.31-1.31,1.31.59,1.31,1.31ZM13.37,14.38c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z" />
              </g>
            </svg>Surprised</button>

          <button className={isClicked ? styles.overwhelmed_clicked : styles.button_unclicked} value={"Overwhelmed"} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M176,140a12,12,0,1,1-12-12A12,12,0,0,1,176,140ZM128,92a12,12,0,1,0-12,12A12,12,0,0,0,128,92Zm73-38A104,104,0,0,0,50.48,197.33,8,8,0,1,0,62.4,186.66a88,88,0,1,1,131.19,0,8,8,0,0,0,11.93,10.67A104,104,0,0,0,201,54ZM152,168H136c-21.74,0-48-17.84-48-40a41.33,41.33,0,0,1,.55-6.68,8,8,0,1,0-15.78-2.64A56.9,56.9,0,0,0,72,128c0,14.88,7.46,29.13,21,40.15C105.4,178.22,121.07,184,136,184h16a8,8,0,0,1,0,16H96a24,24,0,0,0,0,48,8,8,0,0,0,0-16,8,8,0,0,1,0-16h56a24,24,0,0,0,0-48Z"></path></svg>
            Overwhelmed
          </button>

          <button className={isClicked ? styles.anxious_clicked : styles.button_unclicked} value={"Anxious"} onClick={handleClick}>Anxious</button>
        </div>
        <h3>Because...</h3>

        <form className={styles.mood_form} action="">
          <textarea className={styles.description} name="description" id="description" onChange={(e) => setDescription(e.target.value)}>
          </textarea>

          <div className={styles.container_inputs}>
            <div>
              <p>Any music today ?</p>
              <input className={styles.music_input} type="text" onChange={(e) => setFavoriteMusic(e.target.value)} />
            </div>

            <div>
              <p>Any book you read today ?</p>
              <input className={styles.book_input} type="text" onChange={(e) => setFavoriteBook(e.target.value)} />
            </div>

            <div>
              <p>Today's picture</p>
              <input className={styles.picture_input} type="file" onChange={(e) => setPictureOfTheDay(e.target.value)} />
            </div>
          </div>

          <button onClick={handleSubmit}>
            <Link to="/"><img className={styles.validation_btn} src="/Icons/Valid-BtnDark.png" alt="Validation Button" /> </Link>
          </button>
        </form>
      </section >
      <MainMenu />
    </>
  );
};

export default MainForm;