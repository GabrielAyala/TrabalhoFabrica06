import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; 

import './style.css';

function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Login</h1>
                    <input placeholder="E-mail" />
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/cadastro">
                    <FiLogIn size={16} color="#000000"/>
                        Eu não sou cadastrado
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default Login;
