import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginwithLocalStorage from './LoginwithLocalStorage/LoginwithLocalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginwithLocalStorage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
