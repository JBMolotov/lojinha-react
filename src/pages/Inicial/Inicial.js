import React from 'react';
import './Inicial.css';
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";


function Inicial() {

    return ( 
        <> 
            <div className="Boasvindas">
                <BiShoppingBag className="Logo"/>
                <h1>Boas vindas!</h1>
                <h2 className="SegundaCor">Que tal começar se cadastrando na nossa lojinha? Se você já se cadastrou, é só acessar! </h2>
                <h2><Link to="/Acessar">Clique aqui</Link></h2>
            </div>
        </>
    );
}

export default Inicial;