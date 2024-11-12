import { Outlet } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, IconButton } from "@mui/material";
import { useMemo, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => {
    createTheme({
      palette: {
        type: mode,
        background: {
          dark: "#202C31",
          light: "#EDF2F4"
        }
      }
    });
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
        <IconButton onChange={() => setMode(mode === "light" ? "dark" : "light")} />
      </ThemeProvider>
    </>
  );
}

export default App;
