import { Link } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {

    return (
        <>
            <section className="container">
                <Link to="/">
                    <img src="/Icons/house.svg" alt="Home Icon" />
                </Link>

                <Link to="/history">
                    <img src="/Icons/clock-counter-clockwise.svg" alt="History Icon" />
                </Link>
                <Link to="/statistics">
                    <img src="/Icons/chart-donut.svg" alt="Statistics Icon" />
                </Link>
                <Link to="/profile">
                    <img src="/Icons/user.svg" alt="Profile Icon" />
                </Link>
            </section>
        </>
    );
};

export default MainMenu;