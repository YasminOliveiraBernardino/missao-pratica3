import Livro from "../modelo/livros"

var livros: Livro[] = [
    {
        "codigo": 0,
        "codEditora": 0,
        "titulo": "Use a cabeça: Java",
        "resumo": "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
        "autores": ["Bert Bates", "Kathy Sierra"]
    },
    {
        "codigo": 1,
        "codEditora": 1,
        "titulo": "Java, como programar",
        "resumo": "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        "autores": ["Paul Deitel", "Harvey Deitel"]
    },
    {
        "codigo": 2,
        "codEditora": 2,
        "titulo": "Core Java for the Impatient",
        "resumo": "eaders familiar with Horstmann's original, two-volume Core Java books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how theses new features impact the language and core libraries",
        "autores": ["Cay Horstmann"]
    }
];


class ControleLivro{

    obterLivros(){
        return livros;
    }

    public incluir(livro: Livro): void{

        const codigoLivros = this.livros.map((elemento) => elemento.codigo)
        const codigoMaisAlto = Math.max(...codigoLivros)

        livro.codigo = codigoMaisAlto + 1;

        this.livros.push(livro)

    }

    excluir(codigo: number){
        
    }

    
}

export default ControleLivro;