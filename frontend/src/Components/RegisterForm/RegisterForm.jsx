import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import "/fonts.modules.css";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/register", { username, email, password })
      .then((result) => {
        // console.log("Request response:", result);
        const storage = localStorage.setItem("username", username);
        if (result.status === 201) {
          navigate("/home");
        }
      })

      .catch((error) => console.log("Error:", error));
  };

  return (
    <>
      <section className={styles["container"]}>
        <div className={styles["body_section"]}>
          <img src="/Logo/StatMindLogo.png" alt="Logo StatMind" />
          <div>
            <h3>StatMind.</h3>
            <h3>Reflect. Track. Grow.</h3>
          </div>
        </div>
        <div className={styles["register_section"]}>
          <div className={styles["form_section"]}>
            <h2>Sign In</h2>

            <form className={styles["formulaire"]}>
              <label className={styles["labels"]} htmlFor="username">
                Username
                <input
                  aria-label="Input Username"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label className={styles["labels"]} htmlFor="email">
                Email adress
                <input
                  aria-label="Input Email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className={styles["labels"]} htmlFor="password">
                Password
                <input
                  aria-label="Input Password"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>

            <div className={styles["rules"]}>
              <p>Must include :</p>
              <p>▪ at least one number</p>
              <p>▪ at least one capital letter</p>
            </div>

            <div className={styles["register_container"]}>
              <button
                className={styles["register_btn"]}
                onClick={handleSubmit}
                type="submit"
              >
                Register
              </button>
              <p className={styles["redirection"]}>
                Already have an account ?
                <Link className={styles["log_redirection"]} to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
