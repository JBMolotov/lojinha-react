import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './index.css';
import Inicial from './pages/Inicial';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Carrinho from './pages/Carrinho';
import Acessar from './pages/Acessar';
import store from './store'
// import store from './store/Carrinho'
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

const options = {
  timeout: 3000,
  position: 'bottom right',
  offset: '30px',
  transition: 'scale'
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
          <AlertProvider template={AlertTemplate}  {...options}>
            <Route exact path="/" component={Inicial}/>
            <Route exact path="/Produtos" component={Produtos}/>
            <Route exact path="/Pedidos" component={Pedidos}/>
            <Route exact path="/Acessar" component={Acessar}/>
            <Route exact path="/Carrinho" component={Carrinho}/>
          </AlertProvider>
          
          
      </React.StrictMode>
    </Router>
  </Provider>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
