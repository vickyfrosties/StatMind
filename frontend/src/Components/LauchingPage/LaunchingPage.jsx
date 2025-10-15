import { Link, useLocation } from "react-router-dom";
import styles from "./LauchingPage.module.css";

const LaunchingPage = () => {
  return (
    <>
      <div className={styles["first_section"]}>
        <img
          className={styles["logo"]}
          src="./Logo/LogoWhiteV.png"
          alt="StatMind Logo"
        />

        <div className={styles["buttons_section"]}>
          <Link className={styles["button"]} to="/register">
            Sign In
          </Link>
          <Link className={styles["button"]} to="/login">
            Login
          </Link>
        </div>
      </div>

      <div className={styles["conditions"]}>
        <p>
          By continuing, you agree to the StatMind{" "}
          <span className={styles["conditions_span"]}>Terms of Service</span>
          and <span className={styles["conditions_span"]}>Privacy Policy</span>.
        </p>
      </div>
    </>
  );
};

export default LaunchingPage;
