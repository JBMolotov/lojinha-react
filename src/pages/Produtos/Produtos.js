import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/Carrinho/Reducer'
import './Produtos.css';
import Produto from '../../components/Produto/Produto.js'
import { useAlert } from "react-alert";

function Produtos() {
    const [List, setList] = useState(null);
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(()=> {
        //Pegando a lista
        fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
        .then(response => response.json())
        .then(data => setList(data))
        .catch ((error) => {
            <h1>{error}</h1>
        })
    }, []);

    function addItemCart(item) {
        dispatch(addItem(item))
        alert.success("Produto adicionado ao carrinho!");
    }

    function temProdutos () {
        if (List) {
            return List.map((item, key)=>(
                <Produto key={key} item={item} addItemCart={addItemCart} />
            ));
        }
        else {
            return (
            <div className="Loading">
                <img src="../../Gear-Loading.gif" alt="Carregando" />
                <h2>Carregando produtos...</h2>
            </div> );
        }
    }


    // function status(res) {
    //     if (!res.ok) {
    //         throw new Error(res.statusText);
    //     }
    //     return res;
    // }

    return (
        <> 
            <div className="Produtos">

                { temProdutos() }
               
            </div>
        </>
    );
}

export default Produtos;