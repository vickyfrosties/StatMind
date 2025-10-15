import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const username = localStorage.getItem("username");

  const location = useLocation();
  const isLaunchingPage = location.pathname === "/";

  return (
    <>
      <header
        className={styles["header_container"]}
        style={isLaunchingPage ? { display: "none" } : { display: "flex" }}
      >
        <div className={styles["header_container_logo"]}>
          <img src="/Logo/StatMind - Logo.png" alt="StatMind Logo" />
          <h3>StatMind.</h3>
          <h3>Reflect. Track. Grow.</h3>
        </div>

        <nav className={styles["navbar"]}>
          <ul>
            <Link to="/home">
              <p>Home</p>
            </Link>
            <Link to="/history">
              <p>History</p>
            </Link>
            <Link to="/statistics">
              <p>Statistics</p>
            </Link>
          </ul>
        </nav>
        <div className={styles["header_container_profile"]}>
          <Link to="/profile">
            {username ? <p> {username}'s account </p> : <p>My profile</p>}
            <img src="/Icons/user.svg" alt="Profile Icon Page" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
