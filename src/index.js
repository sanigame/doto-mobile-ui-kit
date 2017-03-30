import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import RouterComponent from './Router';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

export default App;