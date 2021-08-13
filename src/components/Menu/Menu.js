import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import './Menu.css';

const Menu = () => {
    return  <div className="Menu">
                <ul className="NavList">
                    <li className="Titulo">LOJINHA</li>
                    <li>Novidades</li>
                    <li>Produtos</li>                    
                    <li>Pedidos</li>
                    <li>Minha conta</li>
                    <li><BiShoppingBag className="Carrinho"/> <span className="NItensCarrinho">5</span></li>
                </ul>
                <div className="line"></div>
            </div>
};

export default Menu;