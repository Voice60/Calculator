import { Provider } from 'react-redux';
import './App.scss';
import Calculator from './components/Calculator/Calculator';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="wrapper">
          <h1 className="title">Calculator</h1>
          <Calculator />
        </div>
      </div>
    </Provider>
  );
}

export default App;

