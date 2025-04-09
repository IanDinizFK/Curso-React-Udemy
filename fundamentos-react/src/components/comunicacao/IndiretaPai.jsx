import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";


export default props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornercerInformacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        console.log(nome, idade, nerd);
    }

    return (
        <div>
            <div>
                <span>Nome: {nome} </span>
                <span>Idade:<strong> {idade} </strong></span>
                <span>Nerd: {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornercerInformacoes}></IndiretaFilho>
        </div>
    )
}