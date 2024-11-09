import styles from "./Header.module.css";

const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="/Logo/StatMind - Logo.png" alt="StatMind Logo" />
          <h3>StatMind.</h3>
          <h3>Reflect. Track. Grow.</h3>

        </div>


      </header>
    </>
  );
};

export default Header;