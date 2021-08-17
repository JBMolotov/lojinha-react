import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarrinhoItems from '../components/Carrinho/Items';
import './Carrinho.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { addItem, removeItem, removeAll } from '../store/Carrinho/Reducer'
import { addPedido } from '../store/Pedidos/Reducer'  
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

    
    return (
        <> 
            <Navbar />
            
            <div className="Carrinho">
                {/* { console.log(carrinho) } */}
                { carrinho && carrinho.length == 0 ? 
                    <h1 className="Boasvindas"> Sem produtos no carrinho... </h1>
                    :
                    <CarrinhoItems 
                        items={carrinho}
                        addItemCarrinho={addItemCarrinho}
                        removeItemCarrinho={removeItemCarrinho}
                        addItemsPedido={addItemsPedido}
                    />    
                }
                
            </div>    
            
        
            <Footer />
        </>
    );
}

export default Carrinho;