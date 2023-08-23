import Professores from '../Modelo/Professor.js';




export default class ProfessorCTRL {

    gravar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "POST" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const tel = dados.tel;
            const email = dados.email;
            const curso = dados.curso;
            
            if (cpf && nome && tel && email && curso) {
                const professor = new Professores(0, cpf, nome, tel, email, curso);
                professor.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        ID: professor.ID,
                        mensagem: "Professor gravado com sucesso!!"
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
            const cpf = dados.cpf;
            const nome = dados.nome;
            const tel = dados.tel;
            const email = dados.email;
            const curso = dados.curso;
            if (ID && cpf && nome && tel && email && curso) {
                const professor = new Professores(ID, cpf, nome, tel, email, curso);
                professor.atualizar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Professor atualizado com sucesso!"
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
            const {ID, cpf, nome, email, curso} = dados;
            if (ID) {
                const professor= new Professores(ID, cpf, nome, email, curso);
                professor.removerDoBancoDados().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Professor excluído com sucesso!"
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
            const professor = new Professores();
            professor.consultar('').then((professores) => {
                resposta.status(200).json(professores);
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