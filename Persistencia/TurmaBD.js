import Turma from '../Modelo/Turma.js';
import Conectar from './Conexao.js';
export default class TurmaBD {

    async incluir(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "INSERT INTO turmas(Professor, Curso, Data, Hora, Tipo de Aula, Quantidade de Alunos) VALUES(?,?,?,?,?,?)";
            const valores = [turma.Professor, turma.Curso, turma.Data, turma.Hora, turma.TipoDeAula, turma.QtdAlunos];
            await conexao.query(sql, valores);
        }
    }

    async alterar(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "UPDATE turmas SET Curso=?, Data=?, Hora=?, TipoDeAula=?, QtdAlunos=? WHERE Professor=?";
            const valores = [turma.Professor, turma.Curso, turma.Data, turma.Hora, turma.TipoDeAula, turma.QtdAlunos];
            await conexao.query(sql, valores);
        }
    }

    async excluir(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "DELETE FROM turmas WHERE Professor=?";
            const valores = [turma.Professor];
            await conexao.query(sql, valores);
        }
    }

    async consultar(termo) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM turmas WHERE Professor LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaTurmas = [];
        for (const row of rows) {
            const turma = new Turma(row['Professor'], row['Curso'], row['Data'], row['Hora'], row['TipoDeAula'], row['QtdAlunos']);
            listaTurmas.push(turma);
        }
        return listaTurmas;
    }
}