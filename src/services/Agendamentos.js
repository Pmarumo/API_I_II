// constructor e métodos para que possamos trabalhar.
const sequelizeAgendamento = require('../models/SequelizeAgendamntos')
const moment = require('moment')

class Agendamento {
    constructor({id, nome_cliente, nome_servico, status, data_agendamento, 
        data_criacao, data_atualizacao}) {
            this.id = id;
            this.nome_cliente = nome_cliente;
            this.nome_servico = nome_servico;
            this.status = status;
            this.data_agendamento = data_agendamento;
            this.data_criacao = data_criacao;
            this.data_atualizacao = data_atualizacao;
        };
        //DIFERENÇA ENTRE MÉTODO E FUNÇÃO funcao que pertence à uma classe, é um método.        
    async criar() {
        this.validar();
        const result = await sequelizeAgendamento.adicionar({
            nome_cliente: this.nome_servico,
            nome_servico: this.nome_servico,
            status: this.status,
            data_agendamento: this.data_agendamento
        });
        this.id = result.id;
        this.data_criacao = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;        
    };
    //MÉTODO DE BUSCA
    async buscar() {
        const result = await sequelizeAgendamento.buscarPorPk(this.id);
        this.nome_cliente = result.nome_cliente;
        this.nome_servico = result.nome_servico;
        this.status = result.status;
        this.data_agendamento = result.data_agendamento;
        this.data_criacao = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    };
    // FOR >> ESTRUTURA DE REPETIÇÃO
    // CRIAR VALIDAÇÕES CONFORME REGRA DE NEGÓCIO
    // PODEMOS CRIAR TODAS DENTRO DA FUNÇÃO VALIDAR
    validar() {
        const camposObrigatorios = ['nome_cliente', 'nome_servico', 'status', 'data_agendamento']
        const hoje = moment().format('YYYY-MM-DD');
        //percorrendo um array
        camposObrigatorios.forEach((campo) => {
            const valor = this[campo]; 
            if(typeof valor !== 'string' || valor.length ===0) {
                throw new Error('Campo inválido!')
            }
            if(campo == 'data_agendamento' && !moment(valor).isSameOrAfter(hoje)) { // !não é >= hoje
                throw new Error('Data Inválida');
            }
        });  
    };
//não deu certo o remover...
    async remover() {
        const result = await sequelizeAgendamento.remover(this.id);
        if(result == 0) {
            throw new Error('Agendamento inexistente')
        }
//       console.log('VERIFICAR', result)
    };
};

module.exports = Agendamento;