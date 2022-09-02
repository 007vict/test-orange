import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom"
import './css/index.module.css';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
reportWebVitals();
