import TurmaBD from '../Persistencia/TurmaBD.js';
export default class Turma {

    #Professor;
    #Turma;
    #Curso;
    #Data;
    #Hora;
    #NumeroDaTurma;
    #TipoDeAula;
    #QtdAlunos;

    constructor(Professor, Turma, Curso, Data, Hora, NumeroDaTurma, TipoDeAula, QtdAlunos) {
        this.#Professor = Professor;
        this.#Turma = Turma;
        this.#Curso = Curso;
        this.#Data = Data;
        this.#Hora = Hora;
        this.#NumeroDaTurma = NumeroDaTurma;
        this.#TipoDeAula = TipoDeAula;
        this.#QtdAlunos = QtdAlunos
    }

    get Professor() {
        return this.#Professor
    }
    set Professor(novoProfessor) {
        this.#Professor = novoProfessor
    }

    get Turma() {
        return this.#Turma
    }
    set Turma(novoTurma) {
        this.#Turma = novoTurma
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

    get NumeroDaTurma() {
        return this.#NumeroDaTurma
    }
    set NumeroDaTurma(novoNumeroDaTurma) {
        this.#NumeroDaTurma = novoNumeroDaTurma
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
            "Turma": this.#Turma,
            "Curso": this.#Curso,
            "Data": this.#Data,
            "Hora": this.#Hora,
            "Nº da Turma": this.#NumeroDaTurma,
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