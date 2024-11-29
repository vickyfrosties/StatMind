import { useNavigate } from "react-router-dom";
import MainMenu from "../../Containers/Menu/MainMenu";
import styles from "./Profile.module.css";
import "/fonts.modules.css";
import axios from "axios";
import Header from "../../Containers/Header/Header";
import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";


const Profile = () => {
  const [currentEmotion, setCurrentEmotion] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const emotionsIcons = {
    "Happy": "./Icons/smiley.svg",
    "Sad": "./Icons/smiley-sad.svg",
    "Angry": "./Icons/smiley-angry.svg",
    "Disgust": "./Icons/smiley-nervous.svg",
    "Overwhelmed": "./Icons/smiley-melting.svg",
    "Surprised": "./Icons/smiley-surprised.svg",
    "Anxious": "./Icons/smiley-anxious.svg",
  };

  // this request notify the server that a user has been logged out
  async function logout() {
    await axios.post("http://localhost:8000/logout", {}, { withCredentials: true })

      .then(result => {
        alert(result.data.message);
        localStorage.removeItem("username");
        window.location.href = "/login";
      })

      .catch(error => {
        console.error('Error during logout:', error);
        alert("Logout failed. Please try again.");
      });
  }

  useEffect(() => {
    const getLastEmotion = async () => {
      try {
        const response = await axios.get("http://localhost:8000/profile");
        setCurrentEmotion(response.data);
      }
      catch (error) {
        console.error("Failed to get last saved emotion", error);
      }
    };
    getLastEmotion();
  }, []);

  const defaultIcon = "./Icons/smiley-empty.svg";

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>
      <section className={styles.first_section}>
        <div className={styles.infos}>
          <div className={styles.first_block}>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="#202C31" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
            <h2>{username}</h2>
          </div>

          {currentEmotion ? (
            <img className={styles.current_emotion} src={emotionsIcons[currentEmotion.emotions]} alt={currentEmotion.emotions} />
          ) : (<img src={defaultIcon} alt="There's no feeling saved yet, to start the journey, please enter today's mood." />)}
        </div>

        <div className={styles.button_container}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#202C31" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
            </svg>
            <h2>Dark</h2>
          </button>

          <button onClick={() => navigate("/history")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#202C31" viewBox="0 0 256 256"><path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
            </svg>
            <h2>History</h2>
          </button>
        </div>
      </section>

      <section className={styles.second_section}>
        <div className={styles.settings_container}>

          <div className={styles.settings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z"></path></svg>
            <h3>Notifications</h3>
          </div>

          <div className={styles.settings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
            <h3>About</h3>
          </div>

          <div className={styles.settings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
            <h3>Privacy</h3>
          </div>
          <div className={styles.settings} onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"></path></svg>
            <h3>Log Out</h3>
          </div>

        </div>
      </section>
      <MainMenu />
    </>
  );
};

export default Profile;