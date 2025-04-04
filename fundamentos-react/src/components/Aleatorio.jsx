import React from "react";


export default function Aleatorio(props) {
    return(
        <div>
        <h2>Valores abaixo</h2>
        <h3>Valor minimo {props.min}</h3>
        <h3>Valor maximo {props.max}</h3>
        <h3>Valor escolhido (random) {Math.floor(Math.random() * props.max) + props.min} </h3>
    </div>
    ) 
}