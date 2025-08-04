import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

var styles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "#0e0e0e",

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App styles={styles} />
  </React.StrictMode>
);

