import React from 'react';
import Item from "./Item";
import { useSelector } from 'react-redux';
//import { removeItem } from '../../store/Carrinho/Reducer';
import { addItem, calculateTotalSelector } from '../../store/Carrinho/Reducer';
import { formatPrice } from '../../utils/format-price'

import './Items.css';

const Items = ({ items, addItemCarrinho, removeItemCarrinho }) => {
    const total = useSelector(calculateTotalSelector);

    return ( 
        <>
            { items ?  items.map((item) => (
                <Item key={item.id} item={item} addItemCarrinho={addItemCarrinho} removeItemCarrinho={removeItemCarrinho} /> 
            )) : <h1></h1> 
            }


            <div className="Cupom">
                <p>Sem cupom aplicado</p>
                <input placeholder="Cupom de desconto"></input>
                <button>Aplicar cupom</button>
            </div>

            <div className="Opcoes">
                <h2>Cartão de crédito</h2>
                <li><button className="MetPag">Escolher método de pagamento</button></li>
            </div>

            <div className="Pagamento">
                <h1>Total: {formatPrice(total)}</h1>
                
                <li><button className="Finalizar">Finalizar compra</button></li>
            </div>
        </>
     );
}
 
export default Items;