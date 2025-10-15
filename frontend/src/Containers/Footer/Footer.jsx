import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const location = useLocation();
  const paths = ["/register", "/login"].includes(location.pathname);

  return (
    <>
      <footer
        className={styles.footer}
        style={paths ? { display: "none" } : { display: "block" }}
      >
        <p>2024 - StatMind</p>
      </footer>
    </>
  );
};

export default Footer;
