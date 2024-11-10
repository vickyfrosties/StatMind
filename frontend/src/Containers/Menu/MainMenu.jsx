import { Link } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {

    return (
        <>
            <section className="container">
                <Link to="../">
                    <img src="/Icons/house.svg" alt="Home Icon" />
                </Link>

                <Link to="../history">
                    <img src="/Icons/clock-counter-clockwise.svg" alt="History Icon" />
                </Link>
                <Link to="../form">
                    <button>
                        <svg width="58" height="58" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="#202C31" />
                            <path d="M40 25C40 25.3315 39.8683 25.6495 39.6339 25.8839C39.3995 26.1183 39.0815 26.25 38.75 26.25H26.25V38.75C26.25 39.0815 26.1183 39.3995 25.8839 39.6339C25.6495 39.8683 25.3315 40 25 40C24.6685 40 24.3505 39.8683 24.1161 39.6339C23.8817 39.3995 23.75 39.0815 23.75 38.75V26.25H11.25C10.9185 26.25 10.6005 26.1183 10.3661 25.8839C10.1317 25.6495 10 25.3315 10 25C10 24.6685 10.1317 24.3505 10.3661 24.1161C10.6005 23.8817 10.9185 23.75 11.25 23.75H23.75V11.25C23.75 10.9185 23.8817 10.6005 24.1161 10.3661C24.3505 10.1317 24.6685 10 25 10C25.3315 10 25.6495 10.1317 25.8839 10.3661C26.1183 10.6005 26.25 10.9185 26.25 11.25V23.75H38.75C39.0815 23.75 39.3995 23.8817 39.6339 24.1161C39.8683 24.3505 40 24.6685 40 25Z" fill="#EDF2F4" />
                        </svg>
                    </button>
                </Link>
                <Link to="../statistics">
                    <img src="/Icons/chart-donut.svg" alt="Statistics Icon" />
                </Link>
                <Link to="../profile">
                    <img src="/Icons/user.svg" alt="Profile Icon" />
                </Link>
            </section>
        </>
    );
};

export default MainMenu;