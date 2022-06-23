import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { MAIN_CONFIG } from "../src/Config/main"
import AirPlane from "../src/Components/SVG/AirPlane"
import { Provider } from 'react-redux';
import "./App.scss"
import store from './Redux/Store/Store';
import AllRoutes from './Routes/AllRoutes';

const App = () => {
  return (
    <>
      {/* <AirPlane color={MAIN_CONFIG.COLORS.fillYellow} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">App Component</Button> */}
      <Provider store={store}>
        <AllRoutes />
        </Provider>


    </>
  );
}

export default App;
