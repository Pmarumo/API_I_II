const TabelaAgendamento = require('./TabelaAgendamento'); //importei a tabela de agendamento
// exportar um objeto >> criar várias funções
module.exports = {
    async listar() {
        try {
            result = await TabelaAgendamento.findAll({
                raw: true,
            }); 
            return result
        } catch (error) {
            throw error
        }   
    },

    async buscarPorPk(id){
        try {
            result = await TabelaAgendamento.findByPk(id);
            return result
        } catch (error){
            throw error
        }
    },

    async adicionar(agendamento) {
        try {
            result = await TabelaAgendamento.create(agendamento);
            return result;
        } catch (error) {
            throw error
        }
    },

    async atualizar(id, dados) {
        try{
            result = await TabelaAgendamento.update(dados, 
                {
                    where: {
                        id:id
                    }
                }
            );
            return result        
        } catch (error) {
            throw error
        }
    },

    async remover(id) {
        try {
            result = await TabelaAgendamento.destroy({ //pega a instância do objeto criado 
                where: {
                    id:id
                }
            });
            return result
        } catch (error) {
            throw error
        }
    }
};
