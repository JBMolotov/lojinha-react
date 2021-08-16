import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Produto from '../components/Produto/Produto.js'
import './Produtos.css';

function Produtos() {
    const [List, setList] = useState(null);


    useEffect(()=> {
        //Pegando a lista
        fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
        .then(response => response.json())
        .then(data => setList(data));
    }, []);

    // console.log(List);

    return (
        <> 
            <Navbar />

            <div className="Produtos">

                { List != null ?
                List.map((item, key)=>(
                        <Produto key={key} item={item} />
                )) :  <div className="Loading">
                    <img src="../../Gear-Loading.gif" />
                    <h2>Carregando produtos...</h2>
                </div> }
               
            </div>
        
            <Footer />
        </>
    );
}

export default Produtos;