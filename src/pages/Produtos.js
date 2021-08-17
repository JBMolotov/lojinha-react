import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/Carrinho/Reducer'
import './Produtos.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Produto from '../components/Produto/Produto.js'
import { useAlert } from "react-alert";

function Produtos() {
    const [List, setList] = useState(null);
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(()=> {
        //Pegando a lista
        fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
        .then(response => response.json())
        .then(data => setList(data));
    }, []);

    function addItemCart(item) {
        dispatch(addItem(item))
        alert.success("Produto adicionado ao carrinho!");
    }


    return (
        <> 
            <Navbar />

            <div className="Produtos">

                { List != null ?
                List.map((item, key)=>(
                        <Produto key={key} item={item} addItemCart={addItemCart} />
                )) :  <div className="Loading">
                    <img src="../../Gear-Loading.gif" alt="Carregando" />
                    <h2>Carregando produtos...</h2>
                </div> }
               
            </div>

        
            <Footer />
        </>
    );
}

export default Produtos;