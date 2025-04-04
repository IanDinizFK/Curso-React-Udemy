import React from "react";


export default function Aleatorio(props) {
    return(
        <div>
        <h2>Valores abaixo</h2>
        <h3>Valor minimo <strong>{props.min}</strong></h3>
        <h3>Valor maximo <strong>{props.max}</strong></h3>
        <h3>Valor escolhido (random) <strong>{Math.floor(Math.random() * props.max) + props.min}</strong></h3>
    </div>
    ) 
}