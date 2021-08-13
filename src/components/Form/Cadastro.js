import React from 'react';
import './Cadastro.css';

const Cadastro = () => {

    function onSubmit(ev) {
        ev.preventDefault();
    }

    return ( <div className="Cadastro">

            <h1>Cadastrar</h1>
            <p>Crie um cadastro rapidamente para acessar os produtos da nossa lojinha!</p>
            <form onSubmit={onSubmit}> 
                <input placeholder="Nome"></input>
                <input placeholder="Email"></input>
                <input placeholder="Senha"></input>
                <input placeholder="Confirmar senha"></input>
                <div>
                    <button type='submit'> Cadastrar </button>
                </div>
            </form>

    </div> );
}
 
export default Cadastro;