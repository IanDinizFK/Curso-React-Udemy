import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/Aleatorio";

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Ian Diniz!"
            nota={10.0}
        />
        <Primeiro />
        <Aleatorio min={1} max={255} />
    </div>
