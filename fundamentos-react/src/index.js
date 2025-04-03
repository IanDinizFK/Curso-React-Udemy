import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
    <div>
        <Primeiro />
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Ian Diniz!"
        nota={10.0}/>
    </div>
)