import React, { useState } from 'react';
import Item from "./Item";
import { useSelector } from 'react-redux';
//import { removeItem } from '../../store/Carrinho/Reducer';
import { addItem, calculateTotalSelector } from '../../store/Carrinho/Reducer';
import { formatPrice } from '../../utils/format-price'
import { useAlert } from "react-alert";

import './Items.css';

const Items = ({ items, addItemCarrinho, removeItemCarrinho, addItemsPedido }) => {
    const [values, setValues] = useState({})
    const [cupom, setCupom] = useState({})
    let total = useSelector(calculateTotalSelector);
    const alert = useAlert();
    
        
    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({...values, [name]: value});
    }

    function AplicarCupom (){
        if (values.cupom == 'PRIMEIRACOMPRA')
        {
            alert.success("Cupom aplicado!");
            setCupom('primeiracompra');
        }
        else
            alert.error("Cupom não é válido");
    }

    return ( 
        <>
            {}
            { items ?  items.map((item) => (
                <Item key={item.id} item={item} addItemCarrinho={addItemCarrinho} removeItemCarrinho={removeItemCarrinho} /> 
            )) : <h1></h1> 
            }


            <div className="Cupom">
                {cupom == 'primeiracompra' ? <p>Cupom de 20% aplicado</p> : <p>Sem cupom aplicado</p>}
                <input name="cupom" onChange={onChange} placeholder="Cupom de desconto"></input>
                <button onClick={AplicarCupom} >Aplicar cupom</button>
            </div>

            <div className="Opcoes">
                <h2>Cartão de crédito</h2>
                <li><button  className="MetPag">Escolher método de pagamento</button></li>
            </div>

            <div className="Pagamento">
                {cupom == 'primeiracompra'
                ? <h1>Total: {formatPrice(total*0.8)}</h1>
                : <h1>Total: {formatPrice(total)}</h1> }
                
                
                <li><button onClick={() => addItemsPedido(items)} className="Finalizar">Finalizar compra</button></li>
            </div>
        </>
     );
}
 
export default Items;