import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Inicial from './pages/Inicial';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/" component={Inicial}/>
      <Route exact path="/Produtos" component={Produtos}/>
      <Route exact path="/Pedidos" component={Pedidos}/>
    </React.StrictMode>
  </Router>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
