import { Provider } from 'react-redux';
import CalculatorContainer from './components/Calculator/CalculatorContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <CalculatorContainer />
    </Provider>
  );
}

export default App;

