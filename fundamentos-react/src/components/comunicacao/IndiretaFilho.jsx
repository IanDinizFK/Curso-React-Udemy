import React from "react";


export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar("Ian", 23, true)}>
                Fornecer Informacoes
            </button>
        </div>
    )
}