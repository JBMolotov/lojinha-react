import React, { useState } from 'react';
import Item from "./Item";
import { useSelector } from 'react-redux';
//import { removeItem } from '../../store/Carrinho/Reducer';
import { calculateTotalSelector } from '../../store/Carrinho/Reducer';
import { formatPrice } from '../../utils/format-price'
import { useAlert } from "react-alert";

import './ItemList.css';

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
        if (values.cupom === 'PRIMEIRACOMPRA')
        {
            alert.success("Cupom aplicado!");
            setCupom('primeiracompra');
        }
        else
            alert.error("Cupom não é válido");
    }

    function temItems () {
        // console.log(items)
        if (items) {
            return (
                items.map((item) => (
                    <Item key={item.id} item={item} addItemCarrinho={addItemCarrinho} removeItemCarrinho={removeItemCarrinho} /> ))
            )
        }
    }

    function checarCupom () {
        if(cupom === 'primeiracompra')
            return (<p>Cupom de 20% aplicado</p>)
        else 
            return (<p>Sem cupom aplicado</p>)
    }

    function calcularTotal () {
        if(cupom === 'primeiracompra')
            return ( <h1>Total: {formatPrice(total*0.8)}</h1> )
        else
            return ( <h1>Total: {formatPrice(total)}</h1> )
    }

    return ( 
        <>
            { temItems() }

            <div className="Cupom">
                {checarCupom()}
                <input name="cupom" onChange={onChange} placeholder="Cupom de desconto"></input>
                <button onClick={AplicarCupom} >Aplicar cupom</button>
            </div>

            <div className="Opcoes">
                <h2>Cartão de crédito</h2>
                <li><button  className="MetPag">Escolher método de pagamento</button></li>
            </div>

            <div className="Pagamento">
                { calcularTotal() }
                <li><button onClick={() => addItemsPedido(items)} className="Finalizar">Finalizar compra</button></li>
            </div>
        </>
     );
}
 
export default Items;