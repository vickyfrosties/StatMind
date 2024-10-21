import "./MainMenu.css";

const MainMenu = () => {

    return (
        <>
            <section className="container">
                <div>
                    <img src="/Icons/house.svg" alt="Home Icon" />
                </div>

                <div>
                    <img src="/Icons/clock-counter-clockwise.svg" alt="History Icon" />
                </div>
                <div>
                    <img src="/Icons/chart-donut.svg" alt="Statistics Icon" />
                </div>
                <div>
                    <img src="/Icons/user.svg" alt="Profile Icon" />
                </div>
            </section>
        </>
    );
};

export default MainMenu;