import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import Catalog from "../../feature/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />

      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
