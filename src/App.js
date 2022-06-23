import "./App.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { MAIN_CONFIG } from "../src/Config/main"
import AirPlane from "../src/Components/SVG/AirPlane"


const App = () => {
  return (
    <>
      <AirPlane color={MAIN_CONFIG.COLORS.fillYellow} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">App Component</Button>
    </>
  );
}

export default App;
