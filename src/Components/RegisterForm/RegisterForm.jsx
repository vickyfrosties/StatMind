import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {

  return (
    <>
      <section className={styles.container}>
        <Link to="/launch">
          <img src="/public/Icons/back.png" alt="Go back Icon" />
        </Link>
        <h2>Sign In</h2>
        <form className={styles.formulaire} action="">
          <input type="text" name="Username" placeholder="Username" />
          <input type="text" name="Email" placeholder="Email" />
          <input type="text" name="Password" placeholder="Password" />
        </form>
        <div className={styles.rules}>
          <p>Must include :</p>
          <p>▪ at least one number</p>
          <p>▪ at least one capital letter</p>
        </div>
        <Link to="/" className={styles.register_confirmed}>
          <button>Register</button>
        </Link>

        <p className={styles.redirection}>Already have an account ? <span className={styles.log_redirection}><Link to="/">Login.</Link></span></p>
      </section>
    </>
  );
};

export default RegisterForm;