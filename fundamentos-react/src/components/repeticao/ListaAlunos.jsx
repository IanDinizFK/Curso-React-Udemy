import React from "react";
import alunos from "../../data/alunos"

export default props => {
    const alunosLI = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} <strong>{aluno.nota}</strong>
            </li>
        )
         
    })

    return(
        <div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {alunosLI}
            </ul>
        </div>
    )

}