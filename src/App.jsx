import { Outlet } from "react-router-dom";
import MainMenu from "./Containers/Menu/MainMenu";


function App() {
  return (
    <>
      <Outlet />
      {/* <MainMenu></MainMenu> */}
    </>
  );
}

export default App;
