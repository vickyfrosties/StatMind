import { Outlet } from "react-router-dom";
import style from "./App.module.css";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <section className={style.app_container}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
