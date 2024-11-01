import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending data:", { username, email, password });

    axios.post("http://127.0.0.1:5173/register", { username, email, password })
      .then(result => {
        console.log("Server response:", result);
      })

      .catch(err => console.log("Error:", err));
  };

  return (
    <>
      <section className={styles.container}>
        <Link to="/launch">
          <img src="/Icons/back.png" alt="Go back Icon" />
        </Link>
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit} className={styles.formulaire}>
          <input type="text" name="Username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="text" name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </form>

        <div className={styles.rules}>
          <p>Must include :</p>
          <p>▪ at least one number</p>
          <p>▪ at least one capital letter</p>
        </div>

        <Link to="/" className={styles.register_confirmed}>
          <button type="submit">Register</button>
        </Link>

        <p className={styles.redirection}>Already have an account ? <span className={styles.log_redirection}><Link to="/">Login.</Link></span></p>
      </section>
    </>
  );
};

export default RegisterForm;