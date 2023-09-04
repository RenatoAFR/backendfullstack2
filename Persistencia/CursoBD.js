import Cursos from '../Modelo/Curso.js';
import Conectar from './Conexao.js';

export default class CursoBD {

    async incluir(curso) {
        if (curso instanceof Cursos) {
            const conexao = await Conectar();
            const sql = "INSERT INTO curso( curso ) VALUES(?)";
            const valores = [curso.curso ];
            const resultado = await conexao.query(sql, valores);
            return await resultado[0].insertId;
        }
    }

    async alterar(curso) {
        if (curso instanceof Cursos) {
            const conexao = await Conectar();
            const sql = "UPDATE curso SET curso=? WHERE ID=?";
            const valores = [ curso.curso, curso.ID];
            await conexao.query(sql, valores);
        }
    }

    async excluir(curso) {
        if (curso instanceof Cursos) {
            const conexao = await Conectar();
            const valor = curso.ID;
            await conexao.query('DELETE FROM curso WHERE ID = ?;', valor);
        }
        else {
            console.log(error.message);
        }
    }

    async consultar(termo) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM curso WHERE curso LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaCursos = [];
        for (const row of rows) {
            const curso = new Cursos(row['ID'], row['curso']);
            listaCursos.push(curso);
        }
        return listaCursos;
    }

    async consultarPeloCurso(Curso) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM curso WHERE curso = ?";
        const valores = [Curso]
        const [rows] = await conexao.query(sql, valores);
        const listaCursos = [];
        for (const row of rows) {
            const curso = new Cursos(row['ID'], row['curso']);
            listaCursos.push(curso);
        }
        return listaCursos;
    }
}