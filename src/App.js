import { Provider } from 'react-redux';
import './App.scss';
import CalculatorContainer from './components/Calculator/CalculatorContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="wrapper">
          <h1 className="title">Calculator</h1>
          <CalculatorContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;

