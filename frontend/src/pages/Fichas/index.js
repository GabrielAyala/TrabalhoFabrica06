import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

function Fichas(){

    const [data, setData] = useState([]);

    useEffect(() => {
        api
        .get("http://localhost:3333/fichas")
        .then((api) => {
            setData(api.data);
        })
        .catch(() => console.log("error"));
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
                {data.map(data => (
                    <li>
                        <strong>Nome do personagem:</strong>
                        <p>{data.nomePersonagem}</p>
                    
                        <strong>Raça</strong>
                        <p>{data.id_raca_ficha}</p>

                        <strong>Classe</strong>
                        <p>{data.id_classe_ficha}</p>

                        <strong>Xp</strong>
                        <p>{data.xp}</p>

                        <strong>Antecedente</strong>
                        <p>{data.antecedente}</p>

                        <strong>Vida Maxima</strong>
                        <p>{data.vida_maxima}</p>

                        <strong>Força</strong>
                        <p>{data.forca}</p>

                        <strong>Destreza</strong>
                        <p>{data.destreza}</p>

                        <strong>Constituição</strong>
                        <p>{data.constituicao}</p>

                        <strong>Inteligência</strong>
                        <p>{data.inteligencia}</p>

                        <strong>Sabedoria</strong>
                        <p>{data.sabedoria}</p>

                        <strong>Carisma</strong>
                        <p>{data.carisma}</p>

                        <strong>Level</strong>
                        <p>{data.level}</p>
                    
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
