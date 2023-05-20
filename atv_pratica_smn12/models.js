/* Curso de Engenharia de Software - UniEVANGÉLICA
Programação Web
Dev: João Pedro Braga Gomes
matrícula: 2110157
DATA: 20/05/2023 */

//Para fazer-mos relacionamentos no modelo de dados do projeto "motos", primeiro temos que identificar quais são as entidades.

//Por exemplo, para criar uma nova entidade "viagens" que se relacionasse com a entidade "motos", cria-se o seguinte modelo:

const viagens = [
    { id: 1, moto_id: 1, localidade: 'Anápolis', data: '2023-05-02' },
    { id: 2, moto_id: 2, localidade: 'Goiânia', data: '2023-04-20' },
    { id: 3, moto_id: 3, localidade: 'Jaraguá', data: '2023-05-15' }
  ];

//Nesse exemplo, cada viagem tem um id único, uma chave estrangeira moto_id que se relaciona com o id de um registro na entidade "moto", um campo "localidade" que indica onde a viagem aconteceu e um campo "data" que indica a data da viagem feita.

//Para retornar os registros relacionados a um registro específico da entidade "moto", seria necessário fazer uma consulta nas entradas da entidade "viagens" que tenham o moto_id igual ao id da moto solicitado. 

//Isso poderia ser feito utilizando o método filter do JavaScript. 

//Por exemplo, para obter todos as viagens de uma moto com id igual a 1, poderíamos fazer o seguinte:

const viagensDeMoto = viagens.filter(a => a.moto_id === 1);

//Assim, teremos um array com todos as viagens de motos com id igual a 1, que poderiam ser enviados como resposta em conjunto com o registro da moto solicitada.