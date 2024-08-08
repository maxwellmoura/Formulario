const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

//Configurando o body parser para pegar o os dados do POST
app.use(bodyParser.urlencoded({ extended: true }));
//Serve o formulario HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
//Manipulando o envio do formulário
app.post('/submit', (req, res) => {
    const { price, description, brand, model } = req.body
    const data = `${price} | ${description} | ${brand} | ${model} \n`
    fs.appendFile('database.txt', data, (err) => {
        if (err) {
            console.log('Erro ao salvar os dados', err);
            res.status(500).send('Erro ao salvar os dados');
        } else {
            res.send('Dados salvos com sucesso');
        }
    })
})
app.listen(port, () => {
    console.log('Servidor iniciado na porta http://localhost:' + port);
})