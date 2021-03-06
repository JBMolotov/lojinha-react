import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import './Navbar.css';
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'



const Navbar = () => {
    // console.log(state => state.carrinho.items)
    const lenght = useSelector(state => state.carrinho.length)

    return <div className="Navbar">
                <ul className="NavList">
                    <li className="Titulo"> <Link to="./">LOJINHA</Link></li>
                    {/* <li>Novidades </li> */}
                    <li><Link to="./Produtos">Produtos</Link> </li>                    
                    <li><Link to="./Pedidos">Meus pedidos</Link> </li>
                    <li><Link to="./Acessar">Minha conta</Link></li>
                    <li><Link to="./Carrinho"><BiShoppingBag className="CarIcon"/> <span className="NItensCarrinho">{lenght}</span></Link></li>
                </ul>
                <div className="line"></div>
            </div>
           
};

export default Navbar;