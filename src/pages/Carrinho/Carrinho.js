import React from 'react';
import CarrinhoItems from '../../components/Carrinho/ItemList';
import './Carrinho.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { addItem, removeItem, removeAll } from '../../store/Carrinho/Reducer'
import { addPedido } from '../../store/Pedidos/Reducer'  
import { useAlert } from "react-alert";


function Carrinho() {
    const carrinho = useSelector(state => state.carrinho)
    const dispatch = useDispatch();
    const alert = useAlert();


    function removeItemCarrinho (id) {
        dispatch(removeItem(id));
        alert.success("Produto removido!");
    }

    function addItemCarrinho (item) {
        dispatch(addItem(item));
        alert.success("Produto adicionado!");
    }

    function addItemsPedido (items) {
        dispatch(addPedido(items));
        alert.success("Compra efetuada! Obrigado");
        dispatch(removeAll(items));
    }

    function carrinhoVazio () {
        if (carrinho && carrinho.length === 0 )
        {
            return ( <h1 className="Boasvindas"> Sem produtos no carrinho... </h1> );
        } 
        else {
            return (
            <CarrinhoItems 
                        items={carrinho}
                        addItemCarrinho={addItemCarrinho}
                        removeItemCarrinho={removeItemCarrinho}
                        addItemsPedido={addItemsPedido}
            /> );
        }
    }

    
    return (
        <> 
            <div className="Carrinho">
                
                { carrinhoVazio() }
                
            </div>    
        </>
    );
}

export default Carrinho;