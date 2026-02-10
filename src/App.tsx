import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.tsx"
import { CssBaseline, ThemeProvider } from '@mui/material'
import { themeDark, themeLight } from './theme/theme.tsx'
import { useState } from "react"


function App() {

  const [mainTheme, setMainTheme] = useState(themeDark);

  const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    value === "dark" ? setMainTheme(themeDark) : setMainTheme(themeLight);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home changeTheme={changeTheme} />} />
          <Route path="/about" element={<p>teste2</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
