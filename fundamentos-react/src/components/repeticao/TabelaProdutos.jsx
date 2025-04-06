import React from "react";
import produtos from "../../data/produtos"
import "./Tabela.css"

export default props => {
    const ListaTR = produtos.map((produto, key) => {
        return (
            <tr  key={key} className={key % 2 === 0 ? 'Par': 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })
    return (
        <table border="1" className="Table">
            <thead>
                <tr style={{ padding: 5, alignContent: "center" }}>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PRECO</th>
                </tr>
            </thead>
            <tbody>
                {ListaTR}
            </tbody>
        </table>
    )
}