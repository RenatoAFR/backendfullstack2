import Professores from '../Modelo/Professor.js';
import Conectar from './Conexao.js';

export default class ProfessorBD {

    async incluir(professor) {
        if (professor instanceof Professores) {
            const conexao = await Conectar();
            const sql = "INSERT INTO professor(cpf, nome, tel, email, curso ) VALUES(?,?,?,?,?)";
            const valores = [professor.cpf, professor.nome, professor.tel, professor.email, professor.curso ];
            const resultado = await conexao.query(sql, valores);
            return await resultado[0].insertId;
        }
    }

    async alterar(professor) {
        if (professor instanceof Professores) {
            const conexao = await Conectar();
            const sql = "UPDATE professor SET cpf=?, nome=?, tel=?, email=?, curso=? WHERE ID=?";
            const valores = [ professor.cpf, professor.nome, professor.tel, professor.email, professor.curso, professor.ID];
            await conexao.query(sql, valores);
        }
    }

    async excluir(professor) {
        if (professor instanceof Professores) {
            const conexao = await Conectar();
            const valor = professor.ID;
            await conexao.query('DELETE FROM professor WHERE ID = ?;', valor);
        }
        else {
            console.log(error.message);
        }
    }

    async consultar(termo) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM professor WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for (const row of rows) {
            const professor = new Professores(row['ID'], row['cpf'], row['nome'], row['tel'], row['email'], row['curso']);
            listaProfessores.push(professor);
        }
        return listaProfessores;
    }

    async consultarPeloNome(Professor) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM professor WHERE nome = ?";
        const valores = [Professor]
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for (const row of rows) {
            const professor = new Professores(row['ID'], row['cpf'], row['nome'], row['tel'], row['email'], row['curso']);
            listaProfessores.push(professor);
        }
        return listaProfessores;
    }
}