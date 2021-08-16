import React from 'react';
import './Produto.css';
import { BiShoppingBag } from "react-icons/bi";

const Produto = ({item}) => {
    
    
    return (
        <div className='Prod'>
            <li><img src={item.image} alt={item.name}/></li>
            <li><h2>{item.name}</h2></li>
            <li><h1>R$ {item.price}</h1></li>
            <li>Estoque: {item.stock}</li>
            <li><button><BiShoppingBag className="CarIcon"/><li> Adicionar ao carrinho</li></button></li>
        </div>
    );
}
 
export default Produto;