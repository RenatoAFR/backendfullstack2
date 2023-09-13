import mysql from 'mysql2/promise';

export default async function Conectar() {
    if (global.conexao && global.conexao.status != "disconnected") {
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "aluno38-pfsii",
        password: "6fSrhL1PuHaDJ606pT3n",
        database: "professor"
    });

    global.conexao = conexao;
    return conexao;
}