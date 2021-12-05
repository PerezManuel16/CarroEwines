import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from "react-router-dom";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAkA13p10grM0LAfDlMn3R2bAEePnbOuSg",
    authDomain: "e-wines-a84c9.firebaseapp.com",
    projectId: "e-wines-a84c9",
    storageBucket: "e-wines-a84c9.appspot.com",
    messagingSenderId: "98581420280",
    appId: "1:98581420280:web:3a53cc825a9e657c22c30d"
};


initializeApp(firebaseConfig);


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
