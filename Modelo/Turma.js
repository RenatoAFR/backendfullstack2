import TurmaBD from '../Persistencia/TurmaBD.js';
export default class Turma {

    #Professor;
    #Curso;
    #Data;
    #Hora;
    #TipoDeAula;
    #QtdAlunos;

    constructor(Professor, Curso, Data, Hora, TipoDeAula, QtdAlunos) {
        this.#Professor = Professor;
        this.#Curso = Curso;
        this.#Data = Data;
        this.#Hora = Hora;
        this.#TipoDeAula = TipoDeAula;
        this.#QtdAlunos = QtdAlunos
    }

    get Professor() {
        return this.#Professor
    }
    set Professor(novoProfessor) {
        this.#Professor = novoProfessor
    }

    get Curso() {
        return this.#Curso
    }
    set Curso(novoCurso) {
        this.#Curso = novoCurso
    }

    get Data() {
        return this.#Data
    }
    set Data(novoData) {
        this.#Data = novoData
    }

    get Hora() {
        return this.#Hora
    }
    set Hora(novoHora) {
        this.#Hora = novoHora
    }

    get QtdAlunos() {
        return this.#QtdAlunos
    }
    set QtdAlunos(novoQtdAlunos) {
        this.#QtdAlunos = novoQtdAlunos
    }

    get TipoDeAula() {
        return this.#TipoDeAula
    }
    set TipoDeAula(novoTipoDeAula) {
        this.#TipoDeAula = novoTipoDeAula
    }

    toJSON() {
        return {
            "Professor": this.#Professor,
            "Curso": this.#Curso,
            "Data": this.#Data,
            "Hora": this.#Hora,
            "QtdAlunos": this.#QtdAlunos,
            "TipoDeAula": this.#TipoDeAula
        }
    }

    async gravar() {
        const turmaBD = new TurmaBD();
        await turmaBD.incluir(this);
    }

    async atualizar() {
        const turmaBD = new TurmaBD();
        await turmaBD.alterar(this);
    }

    async removerDoBancoDados() {
        const turmaBD = new TurmaBD();
        await turmaBD.excluir(this);
    }

    async consultar(termo) {
        const turmaBD = new TurmaBD();
        const turmas = await turmaBD.consultar(termo);
        return turmas;
    }
}