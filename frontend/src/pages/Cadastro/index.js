import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

function Cadastro(){
    return (
        <div className="cadastro-container">
            <section className="form">
                <form>
                    <h1>Cadastro</h1>
                    <input placeholder="Nome de usuario" />
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Cadastrar</button>

                    <Link to="/">
                    <FiArrowLeft size={16} color="#000000"/>
                        Eu já sou cadastrado
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default Cadastro;
