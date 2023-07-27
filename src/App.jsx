import { ThemeProvider, CssBaseline } from "@mui/material"

import { theme } from "./assets/themes/theme"

function App() {


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline enableColorScheme />
      <>
      </>
    </ThemeProvider>
     
  )
}

export default App
