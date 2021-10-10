import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider, Button } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import { SnackbarProvider } from 'notistack';
import { createRef } from 'react';
const App = () => {
  const content = useRoutes(routes);

  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <Button onClick={onClickDismiss(key)}>'Dismiss'</Button>
          )}
        >
          <GlobalStyles />
          {content}
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
