import React from 'react';
import './Acessar.css';
import { BiShoppingBag } from "react-icons/bi";
import Cadastro from '../../components/Form/Cadastro';
import Login from '../../components/Form/Login';
import { Link } from "react-router-dom";


function Acessar () {

    const isAuthed = localStorage.getItem('@lojinha/auth');

    function handleLogout (){
        localStorage.removeItem('@lojinha/auth');
        window.location.reload();
      }

    function isAuth () {
        if (isAuthed) {
            return (
            <div className="Boasvindas">
                <BiShoppingBag className="Logo"/>
                <h1>Você entrou com sucesso!</h1>
                <h2 className="SegundaCor">Use o cupom PRIMEIRACOMPRA para 20% de desconto!</h2>
                <h2><Link onClick={handleLogout}>Sair</Link></h2>
            </div> )
        }
        else {
            return (
            <div className='rowC'>
                <Cadastro />
                <Login />
            </div> )
        }
    }

    return isAuth ();
}

export default Acessar ;