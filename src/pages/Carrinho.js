import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarrinhoItems from '../components/Carrinho/Items';
import './Carrinho.css';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/Carrinho/Reducer' 
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

    
    return (
        <> 
            <Navbar />
            
            <div className="Carrinho">
                {/* { console.log(carrinho) } */}
                { carrinho && carrinho.length == 0 ? 
                    <h1 className="Boasvindas"> Sem produtos no carrinho... </h1>
                    :
                    <CarrinhoItems items={carrinho} addItemCarrinho={addItemCarrinho} removeItemCarrinho={removeItemCarrinho}/>    
                }
                
            </div>    
            
        
            <Footer />
        </>
    );
}

export default Carrinho;