/*Aluno: João Pedro Braga Gomes
  Matrícula: 2110157
  Programação web */


const express = require('express');

const server = express();

server.use(express.json());

const motos = ['xt_660', 'z1000', 'xj6', 'cg160', 'Biz'];

// retorna uma moto
server.get('/motos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(motos[index]);
});

//Retornar todas as motos
server.get('/motos', (req, res) => {
    return res.json(cursos);

});

//Criar uma nova moto
server.post('/motos', (req, res) => {
    const {name} = req.body;
    motos.push(name);

    return res.json(motos);
});

//atualizar uma moto
server.put('/motos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    motos[index] = name;

    return res.json(motos);
});

//deletar uma moto
server.delete('/motos/:index', (req, res) => {
    const {index} = req.params;

    motos.splice(index, 1);
    return res.json({message: "A moto foi deletada"});

});




server.listen(3000);