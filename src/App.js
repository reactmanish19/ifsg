import { Provider } from 'react-redux';
import "./App.scss"
import store from './Redux/Store/Store';
import AllRoutes from './Routes/AllRoutes';
// import MultiStepForm from "../src/Components/MultiStepForm/MultiStepForm"

const App = () => {
  return (
    <>
     
      <Provider store={store}>
        <AllRoutes />
        </Provider>
    </>
  );
}

export default App;
