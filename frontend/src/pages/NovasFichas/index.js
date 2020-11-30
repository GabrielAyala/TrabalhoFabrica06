import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

function NovasFichas(){
    return (
        <div className="novaFicha-container">
            <section className="form">
                <form>
                    <h1>Cadastrar Nova Ficha</h1>
                    <input placeholder="Nome do personagem" />
                    <button className="button" type="submit">Confirmar</button>

                    <Link to="/fichas">
                    <FiArrowLeft size={16} color="#000000"/>
                        Voltar para a Home
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default NovasFichas;
