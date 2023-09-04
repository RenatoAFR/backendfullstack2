import Cursos from '../Modelo/Curso.js';




export default class CursoCTRL {

    gravar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "POST" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const curso = dados.curso;
            
            if (curso) {
                const cursos = new Cursos(0, curso);
                cursos.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        ID: cursos.ID,
                        mensagem: "Curso gravado com sucesso!!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou dados no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    atualizar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "PUT" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const ID = dados.ID;
            const curso = dados.curso;
            if (ID && curso) {
                const cursos = new Cursos(ID, curso);
                cursos.atualizar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Curso atualizado com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou dados no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    excluir(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "DELETE" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const {ID, curso} = dados;
            if (ID) {
                const cursos= new Professores(ID, curso);
                cursos.removerDoBancoDados().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Curso excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe o dados conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou dados no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    consultar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "GET") {
            const curso = new Cursos();
            curso.consultar('').then((cursos) => {
                resposta.status(200).json(cursos);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido!  Consulte a documentação da API"
            });
        }
    }
}