import { ThemeProvider, CssBaseline } from '@mui/material';

import { theme } from './assets/themes/theme';
import MainBody from './components/MainBody';
import Attribution from './components/Attribution';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <MainBody sx={{ backgroundColor: { lg: 'charcoalGrey' } }} />
      <Attribution />
    </ThemeProvider>
  );
}

export default App;
