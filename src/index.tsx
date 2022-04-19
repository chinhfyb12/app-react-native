import App from 'App/App';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'Utils/stores';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
