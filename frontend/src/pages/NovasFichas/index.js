import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

function NovasFichas(){
    const [id_ficha] = useState();
    const [nomePersonagem, setNomePersonagem] = useState('');
    const [id_raca_ficha, setId_raca_ficha] = useState();
    const [id_classe_ficha, setId_classe_ficha] = useState();
    const [xp, setXp] = useState();
    const [antecedente, setAntecedente] = useState();
    const [vida_maxima, setVidaMaxima] = useState();
    const [id_bonus_proeficiencia, setId_bonus_proeficiencia] = useState();
    const [classe_armadura, setClasse_armadura] = useState();
    const [forca, setForca] = useState();
    const [destreza, setDestreza] = useState();
    const [constituicao, setConstituicao] = useState();
    const [inteligencia, setInteligencia] = useState();
    const [sabedoria, setSabedoria] = useState();
    const [carisma, setCarisma] = useState();
    const [level, setLevel] = useState();

    const history = useHistory(); 

    async function cadastrarFichas(e) {
        e.preventDefault();

        const data = {
            id_ficha,
            nomePersonagem, 
            id_raca_ficha,
            id_classe_ficha,
            xp,
            antecedente,
            vida_maxima,
            id_bonus_proeficiencia,
            classe_armadura,
            forca,
            destreza,
            constituicao,
            inteligencia,
            sabedoria,
            carisma,
            level
        };

        try {
        await api.post('fichas', data);

        alert('Ficha cadastrada com sucesso');
        history.push('/fichas');
        } catch (error) {
            alert('Erro no cadastro da ficha, tente novamente');
        }
    }

    return (
        <div className="novaFicha-container">
            <section className="form">
                <form onSubmit={cadastrarFichas} >
                    <h1>Cadastrar Nova Ficha</h1>
                    <ul>
                        <li><input placeholder="Nome" value={nomePersonagem} onChange={e => setNomePersonagem(e.target.value)} /></li>
                        <li><input placeholder="Raça" value={id_raca_ficha} onChange={e => setId_raca_ficha(e.target.value)} /></li>
                        <li><input placeholder="Classe" value={id_classe_ficha} onChange={e => setId_classe_ficha(e.target.value)} /></li>
                        <li><input placeholder="Xp" value={xp} onChange={e => setXp(e.target.value)} /></li>
                    </ul>

                    <ul>
                        <li><input placeholder="Antecedente" value={antecedente} onChange={e => setAntecedente(e.target.value)}/></li>
                        <li><input placeholder="Vida Maxima" value={vida_maxima} onChange={e => setVidaMaxima(e.target.value)} /></li>
                        <li><input placeholder="Proeficiencia" value={id_bonus_proeficiencia} onChange={e => setId_bonus_proeficiencia(e.target.value)} /></li>
                        <li><input placeholder="Armadura" value={classe_armadura} onChange={e => setClasse_armadura(e.target.value)} /></li>
                    </ul>

                    <ul>
                        <li><input placeholder="Força" value={forca} onChange={e => setForca(e.target.value)} /></li>
                        <li><input placeholder="Destreza" value={destreza} onChange={e => setDestreza(e.target.value)} /></li>
                        <li><input placeholder="Constituição" value={constituicao} onChange={e => setConstituicao(e.target.value)} /></li>
                        <li><input placeholder="Inteligencia" value={inteligencia} onChange={e => setInteligencia(e.target.value)} /></li>
                    </ul>

                    <ul>
                        <li><input placeholder="Sabedoria" value={sabedoria} onChange={e => setSabedoria(e.target.value)} /></li>
                        <li><input placeholder="Carisma" value={carisma} onChange={e => setCarisma(e.target.value)} /></li>
                    </ul>

                    <ul>
                        <li><input placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} /></li>
                    </ul>

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
