import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className="Navbar">
                <ul className="NavList">
                    <li className="Titulo"> <Link to="./">LOJINHA</Link></li>
                    {/* <li>Novidades </li> */}
                    <li><Link to="./Produtos">Produtos</Link> </li>                    
                    <li><Link to="./">Meus pedidos</Link> </li>
                    <li><Link to="./Acessar">Minha conta</Link></li>
                    <li><Link to="./Carrinho"><BiShoppingBag className="CarIcon"/> <span className="NItensCarrinho">5</span></Link></li>
                </ul>
                <div className="line"></div>
            </div>
           
};

export default Navbar;