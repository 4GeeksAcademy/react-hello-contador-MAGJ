import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import Home from './components/Home';

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  seconds++;

  root.render(
    <Home seconds={seconds} />
  );
}, 1000);


