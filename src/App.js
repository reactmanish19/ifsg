import { Provider } from 'react-redux';
import "./App.scss";
import { colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import store from './Redux/Store/Store';
import AllRoutes from './Routes/AllRoutes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: colors.orange[100]
    }
  }
}


)

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <AllRoutes />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
