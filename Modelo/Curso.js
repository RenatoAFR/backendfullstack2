import CursoBD from '../Persistencia/CursoBD.js';

class Cursos{

    #ID;
    #curso;

    constructor (ID, curso) {
        this.#ID = ID;
        this.#curso = curso
    }

    get ID() {
        return this.#ID
    }
    set ID(novoID) {
        this.#ID = novoID
    }

    get curso() {
        return this.#curso
    }
    set curso(novoCurso) {
        this.#curso = novoCurso
    }


    toJSON() {
        return {
            "ID": this.#ID,
            "curso": this.#curso
        }
    }

    async gravar() {
        const cursoBD = new CursoBD();
        this.ID = await cursoBD.incluir(this);
    }

    async atualizar() {
        const cursoBD = new CursoBD();
        await cursoBD.alterar(this);
    }

    async removerDoBancoDados() {
        const cursoBD = new CursoBD();
        await cursoBD.excluir(this);
    }

    async consultar(termo) {
        const cursoBD = new CursoBD();
        const cursos = await cursoBD.consultar(termo);
        return cursos;
    }

}

export default Cursos;