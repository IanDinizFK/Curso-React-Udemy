import React from "react";
import IndiretaFilho from "./IndiretaFilho";

let nome = "";
let idade = 0;
let nerd = false;

export default props => {
    function fornercerInformacoes(nome, idade, nerd) {
        nome = nome;
        idade = idade;
        nerd = nerd;
        console.log(nome, idade, nerd);
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornercerInformacoes}></IndiretaFilho>
        </div>
    )
}