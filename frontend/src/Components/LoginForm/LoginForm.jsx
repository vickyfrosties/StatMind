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
      <section className={styles["container"]}>
        <div className={styles["logo_section"]}>
          <img src="/Logo/StatMindLogo.png" alt="Logo StatMind" />
          <div>
            <h3>StatMind.</h3>
            <h3>Reflect. Track. Grow.</h3>
          </div>
        </div>

        <div className={styles["log_section"]}>
          <div className={styles["form_section"]}>
            <h2>Welcome back ! Log in to your account to continue.</h2>

            <form className={styles["formulaire"]}>
              <label className={styles["labels"]} htmlFor="username">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label className={styles["labels"]} htmlFor="password">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>

            <Link className={styles["btn_container"]} to="/">
              <button
                onClick={handleSubmit}
                type="submit"
                className={styles["register_btn"]}
              >
                Log in
              </button>
            </Link>

            <p className={styles["redirection"]}>
              Don't have an account ?
              <span className={styles["signin_span"]}>
                <Link to="/register">Create an account</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
