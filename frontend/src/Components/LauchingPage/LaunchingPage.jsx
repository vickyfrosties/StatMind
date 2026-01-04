import { Link, useLocation } from "react-router-dom";
import styles from "./LauchingPage.module.css";

const LaunchingPage = () => {
  return (
    <>
      <div className={styles["first_section"]}>
        <div className={styles["logo_section"]}>
          <img src="/Logo/StatMindLogo.png" alt="Logo StatMind" />
          <div>
            <h3>StatMind.</h3>
            <h3>Reflect. Track. Grow.</h3>
          </div>
        </div>

        <div className={styles["authentification_section"]}>
          <h2>
            Welcome ! Get started with a new account or your existing StatMind
            account.
          </h2>

          <div className={styles["buttons_section"]}>
            <Link className={styles["button_register"]} to="/register">
              Sign In
            </Link>
            <Link className={styles["button_log"]} to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchingPage;
