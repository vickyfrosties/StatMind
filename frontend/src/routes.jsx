import App from "./App";
import LoginForm from "./Components/LoginForm/LoginForm";
import HomePage from "./Components/HomePage/HomePage";
import MainForm from "./Components/MainForm/MainForm";
import Profile from "./Components/Profile/Profile";
import HistoryPage from "./Components/HistoryPage/HistoryPage";
import Statistics from "./Components/Statistics/Statistics";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LaunchingPage from "./Components/LauchingPage/LaunchingPage";

const routes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <LaunchingPage />,
      },

      {
        path: "form",
        element: <MainForm />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "home",
        element: <HomePage />,
      },

    ]
  }

];

export default routes;