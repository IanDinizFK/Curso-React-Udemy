import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import "./App.css"
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Ian" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: "Ian@gmail.com" }}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio repeticao" color="#3A9AD9">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repeticao" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Oliveira">
                    <FamiliaMembro nome="Ian" />
                    <FamiliaMembro nome="Louise" />
                    <FamiliaMembro nome="Kitty" sobrenome="Oliveira" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={255} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Ian Diniz!"
                    nota={10.0} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
