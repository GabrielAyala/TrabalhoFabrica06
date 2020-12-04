import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

function Fichas(){

    function pegandoFichas() {
        
    };

    return (
        <div className="fichas-container">
            <header>
                <Link className="button" to="/fichas/novasFichas">Cadastrar nova ficha</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Fichas Cadastradas</h1>

            <ul>
                <li>
                    <strong>Nome do personagem:</strong>
                    <p>Sung Jin Woo</p>

                    <strong>Raça</strong>
                    <p>Humano</p>

                    <strong>Classe:</strong>
                    <p>Mago</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Nome do personagem:</strong>
                    <p>Sung Jin Woo</p>

                    <strong>Raça</strong>
                    <p>Humano</p>

                    <strong>Classe:</strong>
                    <p>Mago</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Nome do personagem:</strong>
                    <p>Sung Jin Woo</p>

                    <strong>Raça</strong>
                    <p>Humano</p>

                    <strong>Classe:</strong>
                    <p>Mago</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Nome do personagem:</strong>
                    <p>Sung Jin Woo</p>

                    <strong>Raça</strong>
                    <p>Humano</p>

                    <strong>Classe:</strong>
                    <p>Mago</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    );
}

export default Fichas;
