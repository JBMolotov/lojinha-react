import React, { useState } from 'react';
import './Cadastro.css';

const initialValue = {
    nome: null,
    email: null,
    senha: null,
    confsenha: null
}

const Cadastro = () => {
    const [values, setValues] = useState({})
    const [erros, setErros] = useState({})
    

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({...values, [name]: value});
    }


    function validate(values) {
        const erros = {};
        if (values.nome == null || values.nome.lenght > 50 || values.nome.lenght < 4)
            erros.geral = 'Insira um nome válido'
        else if (values.email == null || !values.email.includes('@') || !values.email.includes('.'))
            erros.geral = 'Insira um email válido'
        else if (values.senha == null || values.senha.lenght >= 8)
            erros.geral = 'Insira uma senha válida'
        else  if(!(values.senha == values.confsenha))
            erros.geral = 'Senhas não coincidem'

        return erros;
    }

    function onSubmit(ev) {
        ev.preventDefault();
        setErros(validate(values));
        
    }

    return ( <div className="Cadastro">

            <h1>Cadastrar</h1>
            <p>Crie um cadastro rapidamente para acessar os produtos da nossa lojinha!</p>
            <form onSubmit={onSubmit}>
                {erros.geral && <p name="error" className="erro">{erros.geral}</p>}
                <input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    onChange={onChange}
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={onChange}
                />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={onChange}
                />
                <input
                    name="confsenha"
                    type="password"
                    placeholder="Confirmar senha" 
                    onChange={onChange}
                />
                <div>
                    <button type='submit'> Cadastrar </button>
                </div>
            </form>

    </div> );
}
 
export default Cadastro;