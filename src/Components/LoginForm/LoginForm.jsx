import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {

    return (
        <>
            <div className={styles.first_section}>
                <img src="/Logo/StatMind - Logo.png" alt="StatMind Logo" />
                <h3>StatMind</h3>
                <h3>Reflect. Track. Grow.</h3>
            </div>

            <h3>Welcome back! Log in to continue.</h3>

            <form className={styles.formulaire} action="">
                <input type="text" name="Username" id="" placeholder="Username" />
                <input type="text" name="Username" id="" placeholder="Password" />
            </form>
            <Link className={styles.btn_container} to="/">
                <button className={styles.register_btn}>Register</button>
            </Link>

            <p className={styles.p_login}>Don't have an account ? <span className={styles.signin_span}><Link to="/register">Sign In</Link></span></p>
        </>
    );
};

export default LoginForm;