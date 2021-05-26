// quem vai conversar com a rota e com o objeto
const Agendamento = require('./Agendamentos'); //Agendamento
const SequelizeAgendamentos = require('../models/SequelizeAgendamntos');

module.exports = {
    carregarTodosAgendamentos: async(req, resp) => {
        try {
            const results = await  
            resp.status(201).send(JSON.stringify(results));
        } catch (error) {
            resp.status(401).send(JSON.stringify(error))
        }
    },

    carregarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.status(401).send(JSON.stringify(error))
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
            resp.status(401).send(JSON.stringify(error))
        }
    }
}