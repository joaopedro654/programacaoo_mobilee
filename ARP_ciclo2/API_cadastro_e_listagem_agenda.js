/*Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina de Programação Web
Dev: João Pedro Braga Gomes
Matrícula: 2110157
DATA: 20/05/2023 */

//As dependências express e body-parser são importadas.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//A variável appointments é criada para armazenar os agendamentos.
let appointments = [];

// Rota para cadastrar um agendamento.
//É criada uma rota POST para a url /appointments.
app.post('/appointments', (req, res) => {

    //Na parte do req.body são extraídas as informações do agendamento (nome do paciente e data).
  const { patientName, date } = req.body;

  //Criamos um objeto appointment com essas informações.
  const appointment = { patientName, date };
  appointments.push(appointment);
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});