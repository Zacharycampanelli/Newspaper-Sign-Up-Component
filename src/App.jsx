import { ThemeProvider, CssBaseline } from "@mui/material"

import { theme } from "./assets/themes/theme"
import MainBody from "./components/MainBody"

function App() {


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline enableColorScheme />
     <MainBody />
    </ThemeProvider>
     
  )
}

export default App
