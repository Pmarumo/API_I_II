const express = require('express');
//chamar a rota dos agendamentos. não vamos usar CONSIGN
const routesAgendamento = require('../api') //rotas de agendamento, não precisa informar /index.js, automaticamente ele já pega o arquivo index

module.exports = () => {
    const app = express();

    app.use(express.json());
    app.use('/api', routesAgendamento); //cria um caminho e dentro desse caminho joga a minha rota Agendamento

    return app
}