import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './theme/GlobalStyle';
import AppRouter from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTopButton from './shared/scroll-top/TopButton';

const App: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <AppRouter />
        <ScrollToTopButton />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
