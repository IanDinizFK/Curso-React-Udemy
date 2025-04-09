import React from "react";
import DiretaFilho from "./DiretaFilho";


export default props => {
    return (
        <div>
            <DiretaFilho nome="Ian" idade={23} nerd={true} />
            <DiretaFilho nome="Iasmim" idade={32} nerd={false} />
        </div>
    )
}