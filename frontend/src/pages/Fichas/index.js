import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

function Fichas(){

    const [incidentes, setIncidentes] = useState([]);

    useEffect(() => {
        api.get('fichas').then(response => {
            setIncidentes(response.data);
        });
    }, []);

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
                {incidentes.map(incidentes => (
                    <li>
                        <strong>Nome do personagem:</strong>
                        <p>{incidentes.nomePersonagem}</p>
                    
                        <strong>Raça</strong>
                        <p>{incidentes.id_raca_ficha}</p>
                    
                        <strong>Classe:</strong>
                        <p>Mago</p>
                    
                        <button type="button">
                        <FiTrash2 size={20} color=" #a8a8b3" />
                        </button>
                    </li>
                ))} 
            </ul>

        </div>
    );
}

export default Fichas;
