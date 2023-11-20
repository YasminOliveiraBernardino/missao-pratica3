import React, { useState } from "react";

function LinhaLivro(props){
    const {livro, excluir} = props;

    return(
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.titulo}</td>
        </tr>
    )
    
}

function LivroLista(){
    const [livros, carregarLivro] = useState([])
    const [load, onLoad] = useState(false)

    return (
        <div>
            
            <h1>  </h1>
        </div>
    )

}

export default LivroLista