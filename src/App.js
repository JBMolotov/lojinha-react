import React from 'react';
import { Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './App.css';
import Inicial from './pages/Inicial/Inicial';
import Produtos from './pages/Produtos/Produtos';
import Pedidos from './pages/Pedidos/Pedidos';
import Carrinho from './pages/Carrinho/Carrinho';
import Acessar from './pages/Acessar/Acessar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
  
const options = {
    timeout: 3000,
    position: 'bottom right',
    offset: '30px',
    transition: 'scale'
  };

  
export default function lojinha() {
    return (
        <Provider store={store}>
            <Router>
            <React.StrictMode>
                <AlertProvider template={AlertTemplate}  {...options}>
                    <Navbar />
                    <Route exact path="/" component={Inicial}/>
                    <Route exact path="/Produtos" component={Produtos}/>
                    <Route exact path="/Pedidos" component={Pedidos}/>
                    <Route exact path="/Acessar" component={Acessar}/>
                    <Route exact path="/Carrinho" component={Carrinho}/>
                    <Footer />
                </AlertProvider>
            </React.StrictMode>
            </Router>
        </Provider>
    )
};


  