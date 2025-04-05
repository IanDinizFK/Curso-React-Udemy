import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Ian" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Louise" {...props}/>
            <FamiliaMembro nome="Kitty" sobrenome="Oliveira"/>
        </div>
    );
}