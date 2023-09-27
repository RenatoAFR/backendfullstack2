import Turma from '../Modelo/Turma.js';
export default class TurmaCTRL {

    gravar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "POST" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const Professor = dados.Professor;
            const Curso = dados.Curso;
            const Data = dados.Data;
            const Hora = dados.Hora;
            const QtdAlunos = dados.QtdAlunos;
            const TipoDeAula = dados.TipoDeAula;
            if (Professor && Curso && Data && Hora && TipoDeAula && QtdAlunos) {
                const turma = new Turma(Professor, Curso, Data, Hora, TipoDeAula, QtdAlunos);
                turma.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Turma gravado com sucesso!!"
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
                    mensagem: "Informe todos os dados da Turma conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou Turma no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    atualizar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "PUT" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const Professor = dados.Professor;
            const Curso = dados.Curso;
            const Data = dados.Data;
            const Hora = dados.Hora;
            const QtdAlunos = dados.QtdAlunos;
            const TipoDeAula = dados.TipoDeAula;
            if (Professor && Curso && Data && Hora && TipoDeAula && QtdAlunos) {
                const turma = new Turma(Professor, Curso, Data, Hora, TipoDeAula, QtdAlunos);
                turma.atualizar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Turma atualizado com sucesso!"
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
                    mensagem: "Informe todos os dados da turma conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou turma no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    excluir(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "DELETE" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const Professor = dados.Professor;
            if (Turma) {
                const turma= new Turma(Professor);
                turma.removerDoBancoDados().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Turma excluído com sucesso!"
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
                    mensagem: "Informe o Professor conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou professor no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    consultar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "GET") {
            const turma = new Turma();
            turma.consultar('').then((turma) => {
                resposta.status(200).json(turma);
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