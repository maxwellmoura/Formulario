const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Configura o body-parser para extrair os dados do corpo do POST como URL encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve o formulário HTML quando o usuário acessa a raiz do site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manipula o envio do formulário
app.post('/submit', (req, res) => {
    // Loga o corpo da requisição para depuração
    console.log('Dados recebidos:', req.body);

    // Extraindo os dados do corpo da requisição
    const { title, price, description, brand, model, mileage, gear, optional } = req.body;

    // Verifica se todas as variáveis foram capturadas corretamente
    if (!title || !price || !description || !brand || !model || !mileage || !gear) {
        res.status(400).send('Dados incompletos recebidos');
        return;
    }

    // Formata os dados recebidos em uma string para salvar em um arquivo de texto
    const data = `${title} | ${price} | ${description} | ${brand} | ${model} | ${mileage} | ${gear} | ${optional ? optional.join(', ') : 'Nenhum'}\n`;

    // Adiciona os dados no arquivo "database.txt"
    fs.appendFile('database.txt', data, (err) => {
        if (err) {
            console.log('Erro ao salvar os dados', err);
            res.status(500).send('Erro ao salvar os dados');
        } else {
            res.send('Dados salvos com sucesso');
        }
    });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log('Servidor iniciado na porta http://localhost:' + port);
});
