import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import { HooksApp } from './HooksApp';
import { Counter } from './01-useState/Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
)