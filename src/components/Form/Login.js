import React, { useState } from 'react';
import './Login.css';

const initialValue = {
    email: null,
    senha: null
}



const Login = () => {
    const [values, setValues] = useState({})
    const [erros, setErros] = useState({})

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({...values, [name]: value});
    }

    function validate(values) {
        const erros = {};

        if (values.email == null)
            erros.geral = 'Insira um email válido'
        else if (values.senha == null)
            erros.geral = 'Insira uma senha válida'
        else if(values.email != 'teste@liven.tech' && values.senha != '123' )
            erros.geral = 'Email e/ou senha incorretos'

        return erros;
    }


    function onSubmit(ev) {
        ev.preventDefault();
        // console.log(values);

        setErros(validate(values));
    }

  

    return ( <div className="Acesso">

            <h1>Acessar</h1>
            <p className="Desc">Se você já possui um cadastro é só entrar e aproveitar!</p>
            <form onSubmit={onSubmit}> 
                {erros.geral && <p name="error" className="erro">{erros.geral}</p>}
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
                <div>
                    <button type='submit'> Acessar </button>
                </div>
            </form>

    </div> );
}
 
export default Login;