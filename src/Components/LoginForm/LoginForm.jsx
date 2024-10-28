import styles from "./LoginForm.modules.css";

const LoginForm = () => {

    return (
        <>
            <div className={styles.first_section}>

                <img src="/Logo/StatMind - Logo.png" alt="StatMind Logo" />
                <h3>StatMind</h3>
                <h3>Reflect. Track. Grow.</h3>
            </div>
            <h3>Welcome back! Log in to continue.</h3>
            <form action="">
                <input type="text" name="Username" id="" />
            </form>
        </>
    );
};

export default LoginForm;