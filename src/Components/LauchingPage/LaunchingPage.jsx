import { Link } from "react-router-dom";
import styles from "./LauchingPage.module.css";

const LaunchingPage = () => {
  return (
    <>
      <div className={styles.first_section}>
        <img className={styles.logo} src="/Logo/StatMind - Logo.png" alt="StatMind Logo" />
        <h3>StatMind</h3>
        <h3>Reflect. Track. Grow.</h3>
      </div>

      <div className={styles.buttons_section}>
        <Link className={styles.button} to="/register">Sign In</Link>
        <Link className={styles.button} to="/login">Login</Link>

      </div>
    </>
  );
};

export default LaunchingPage;