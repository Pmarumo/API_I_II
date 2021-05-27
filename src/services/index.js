// quem vai conversar com a rota e com o objeto
const Agendamento = require('./Agendamentos'); //Agendamento
const SequelizeAgendamentos = require('../models/SequelizeAgendamntos');

module.exports = {
    carregarTodosAgendamentos: async(req, resp) => {
        try {
            const results = await  
            resp.status(201).send(JSON.stringify(results));
        } catch (error) {
            resp.status(401).send(JSON.stringify({error: error.message}))
        }
    },

    carregarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.status(401).send(JSON.stringify({error: error.message}))
        }
    },
    //tratando os erros:
    criarAgendamento: async(req, resp) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.status(401).send(JSON.stringify({error: error.message}))
        }
    },

    deletarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.remover()
            resp.status(201).send(JSON.stringify({message: `Agendamento: ${id}removido com sucesso!`}));
        } catch (error) { 
            resp.status(404).send(JSON.stringify({error: error.message}))
        }
    },

    alterarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id:id})
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar();
            resp.status(201).send(); 
        } catch (error) {
            resp.status(400).send(); 
        }
    }
}