import { Provider } from 'react-redux';

import Routes from './Routes';
import configureStore from './store';
import './styles.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
