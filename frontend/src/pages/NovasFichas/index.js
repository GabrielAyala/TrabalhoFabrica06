import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

function NovasFichas(){

    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [classe, setClasse] = useState('');
    const [xp, setXp] = useState('');
    const [antecedente, setAntecedente] = useState('');
    const [vidaMax, setVidaMax] = useState('');
    const [proeficiencia, setProeficiencia] = useState('');
    const [armadura, setArmadura] = useState('');
    const [forca, setForca] = useState('');
    const [destreza, setDestreza] = useState('');
    const [constituicao, setConstituicao] = useState('');
    const [inteligencia, setInteligencia] = useState('');
    const [sabedoria, setSabedoria] = useState('');
    const [carisma, setCarisma] = useState('');

    async function cadastrarFichas(e) {
        e.preventDefault();

        const data = {
            nome, 
            raca,
            classe,
            antecedente,
            vidaMax,
            proeficiencia,
            armadura,
            forca,
            destreza,
            constituicao,
            inteligencia,
            sabedoria,
            carisma
        };

        try {
        const response = await api.post('fichas', data);

        alert('Ficha cadastrada com sucesso');
        } catch (err) {
            alert('Erro no cadastro da ficha, tente novamente');
        }
    }

    return (
        <div className="novaFicha-container">
            <section className="form">
                <form onSubmit={cadastrarFichas} >
                    <h1>Cadastrar Nova Ficha</h1>
                    <ul>
                        <li><input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /></li>
                        <li><input placeholder="Raça" value={raca} onChange={e => setRaca(e.target.value)} /></li>
                        <li><input placeholder="Classe" value={classe} onChange={e => setClasse(e.target.value)} /></li>
                        <li><input placeholder="Xp" value={xp} onChange={e => setXp(e.target.value)} /></li>
                    </ul>

                    <ul>
                        <li><input placeholder="Antecedente" value={antecedente} onChange={e => setAntecedente(e.target.value)}/></li>
                        <li><input placeholder="Vida Maxima" value={vidaMax} onChange={e => setVidaMax(e.target.value)} /></li>
                        <li><input placeholder="Proeficiencia" value={proeficiencia} onChange={e => setProeficiencia(e.target.value)} /></li>
                        <li><input placeholder="Armadura" value={armadura} onChange={e => setArmadura(e.target.value)} /></li>
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
