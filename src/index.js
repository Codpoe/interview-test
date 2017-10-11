import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './components/App/App.js';

reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);