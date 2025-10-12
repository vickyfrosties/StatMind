import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/login", { username, password })
      .then((result) => {
        if (result.status === 201) {
          localStorage.setItem("username", result.data.username);
          navigate("/home");
        } else {
          console.log(result.error);
        }
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <>
      <div className={styles.first_section}>
        <img src="./Logo/LogoWhiteV.png" alt="StatMind Logo" />
      </div>

      <h2>Welcome back! Log in to continue.</h2>

      <form className={styles.formulaire}>
        <label className={styles.labels} htmlFor="username">
          Enter your username :
          <input
            type="text"
            name="Username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className={styles.labels} htmlFor="password">
          Enter your password :
          <input
            type="password"
            name="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>

      <Link className={styles.btn_container} to="/">
        <button
          onClick={handleSubmit}
          type="submit"
          className={styles.register_btn}
        >
          Log in
        </button>
      </Link>

      <p className={styles.p_login}>
        Don't have an account ?
        <span className={styles.signin_span}>
          <Link to="/register">Create an account</Link>
        </span>
      </p>
    </>
  );
};

export default LoginForm;
