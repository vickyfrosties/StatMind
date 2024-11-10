import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Successful connection", { username, password });

        await axios.post("http://localhost:8000/login", { username, password },
        )
            .then(result => {
                console.log("Request response:", result);
            })
            .catch(error => console.log("Error:", error));
    };


    return (
        <>
            <div className={styles.first_section}>
                <img src="./Logo/LogoWhiteV.png" alt="StatMind Logo" />
            </div>

            <h3>Welcome back! Log in to continue.</h3>

            <form className={styles.formulaire} action="">
                <input type="text" name="Username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" name="Password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </form>
            <Link className={styles.btn_container} to="/">
                <button onClick={handleSubmit} type="submit" className={styles.register_btn}>Register</button>
            </Link>

            <p className={styles.p_login}>Don't have an account ? <span className={styles.signin_span}><Link to="/register">Sign In</Link></span></p>
        </>
    );
};

export default LoginForm;