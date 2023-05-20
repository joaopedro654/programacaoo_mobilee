/*Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina de Programação Web
Dev: João Pedro Braga Gomes
Matrícula: 2110157
DATA: 20/05/2023 */

//Nas linhas 7 e 8 as dependências express e body-parser são importadas.
const express = require('express');

//O body-parser é utilizado para que possamos acessar os dados enviados pelo cliente via POST no req.body.
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//A variável patients é criada para armazenar os pacientes cadastrados.
let patients = [];

// Rota para cadastrar um paciente
//rota POST para a url /patients.
app.post('/patients', (req, res) => {

    //No req.body são extraídas as informações do paciente (nome, idade e gênero).
  const { name, age, gender } = req.body;

  //Um objeto patient com essas informações.
  const patient = { name, age, gender };
  patients.push(patient);

  //É enviado uma resposta com status 201 indicando que o paciente foi cadastrado com sucesso. */
  res.status(201).send(`Paciente ${name} cadastrado com sucesso.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});