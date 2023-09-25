import Turma from '../Modelo/Turma.js';
import Conectar from './Conexao.js';
export default class TurmaBD {

    async incluir(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "INSERT INTO turma(Professor, Turma, Curso, Data, Hora, Nº da Turma, Tipo de Aula, Quantidade de Alunos) VALUES(?,?,?,?,?,?,?,?)";
            const valores = [turma.Professor, turma.Turma, turma.Curso, turma.Data, turma.Hora, turma.NumeroDaTurma, turma.TipoDeAula, turma.QtdAlunos];
            await conexao.query(sql, valores);
        }
    }

    async alterar(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "UPDATE turma SET Turma=?, Curso=?, Data=?, Hora=?, NumeroDaTurma=?, TipoDeAula=?, QtdAlunos=? WHERE Professor=?";
            const valores = [turma.Professor, turma.Curso, turma.Data, turma.Hora, turma.NumeroDaTurma, turma.TipoDeAula, turma.QtdAlunos, turma.Turma];
            await conexao.query(sql, valores);
        }
    }

    async excluir(turma) {
        if (turma instanceof Turma) {
            const conexao = await Conectar();
            const sql = "DELETE FROM turma WHERE Professor=?";
            const valores = [turma.Turma];
            await conexao.query(sql, valores);
        }
    }

    async consultar(termo) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM turma WHERE Professor LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaTurmas = [];
        for (const row of rows) {
            const turma = new Turma(row['Professor'], row['Turma'], row['Curso'], row['Data'], row['Hora'], row['NumeroDaTurma'], row['TipoDeAula'], row['QtdAlunos']);
            listaTurmas.push(turma);
        }
        return listaTurmas;
    }
}