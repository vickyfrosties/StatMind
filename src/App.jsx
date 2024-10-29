import { Outlet } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <LoginForm setToken={setToken} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
