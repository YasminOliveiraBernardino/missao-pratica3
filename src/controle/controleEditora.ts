import Editora from '../modelo/editora';

var editoras: Editora[] = [
    {
        "codEditora": 1,
        "nome": "Alta books"
    },
    {
        "codEditora": 2,
        "nome": "Pearson"
    },
    {
        "codEditora": 3,
        "nome": "Addison Wesley"
    }
];

class controleEditoras{

    getNomeEditora(codEditora: number) {

    };


    getEditoras(): Editora[] {
        return editoras;
    }

}

export default controleEditoras;