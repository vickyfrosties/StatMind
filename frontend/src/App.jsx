import { Outlet } from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';


function App() {

  const theme = createTheme({
    primaryColor: "#202C31"
  });

  return (
    <MantineProvider theme={theme}>
      <Outlet />
    </MantineProvider>
  );
}

export default App;
