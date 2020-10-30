## Desafio Conceitos Node.js desenvolvido através do GoStack da Rocketseat

![Screenshot_1](https://user-images.githubusercontent.com/59877230/97759691-4eaeb100-1ae0-11eb-929b-6cf005965249.jpg)

## 🚀 Sobre o Desafio 

Esse desafio visa fixar os conhecimentos e conceitos básicos em Node.js como: testes de rotas com Insomnia, Métodos HTTP: GET, POST, PUT e DELETE e suas devidas funcionalidades dentro da aplicação. 

<br>

## ⚡Rotas da Aplicação 

- POST /repositories: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- GET /repositories: Rota que lista todos os repositórios;

- PUT /repositories/:id: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- DELETE /repositories/:id: A rota deve deletar o repositório com o id presente nos parâmetros da rota;

- POST /repositories/:id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

<br>

## 😍 Coisas que achei interessante

- Enquanto estávamos desenvolvendo a API para as rotas em Node.js, pude ter uma noção de como o Back-end é utilizado na hora do desenvolvimento e como se comportam as coisas por trás da aplicação, principamente as rotas; 

- Os conceitos foram aplicados de uma forma muito dinâmica e fácil de entender!; 

Meus sinceros agradecimentos à [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg) por esse desafio incrível! 💜 

Made by Henrique C. Machado 
