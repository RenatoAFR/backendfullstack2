import ProfessorBD from '../Persistencia/ProfessorBD.js';

class Professores{

    #ID;
    #cpf;
    #nome;
    #tel;
    #email;
    #curso;

    constructor (ID, cpf, nome, tel, email, curso) {
        this.#ID = ID;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#tel = tel;
        this.#email = email;
        this.#curso = curso
    }

    get ID() {
        return this.#ID
    }
    set ID(novoID) {
        this.#ID = novoID
    }

    get cpf() {
        return this.#cpf
    }
    set cpf(novoCpf) {
        this.#cpf = novoCpf
    }

    get nome() {
        return this.#nome
    }
    set nome(novoNome) {
        this.#nome = novoNome
    }

    get tel() {
        return this.#tel
    }
    set tel(novoTel) {
        this.#tel = novoTel
    }

    get email() {
        return this.#email
    }
    set email(novoEmail) {
        this.#email = novoEmail
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
            "cpf": this.#cpf,
            "nome": this.#nome,
            "tel": this.#tel,
            "email": this.#email,
            "curso": this.#curso
        }
    }

    async gravar() {
        const professorBD = new ProfessorBD();
        this.ID = await professorBD.incluir(this);
    }

    async atualizar() {
        const professorBD = new ProfessorBD();
        await professorBD.alterar(this);
    }

    async removerDoBancoDados() {
        const professorBD = new ProfessorBD();
        await professorBD.excluir(this);
    }

    async consultar(termo) {
        const professorBD = new ProfessorBD();
        const professores = await professorBD.consultar(termo);
        return professores;
    }

}

export default Professores;