import React from "react";


export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar("Ian", gerarIdade(), true)}>
                Fornecer Informacoes
            </button>
        </div>
    )
}