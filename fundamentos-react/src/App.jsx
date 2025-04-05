import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import "./App.css"

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Oliveira"/>
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
