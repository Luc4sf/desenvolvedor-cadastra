# E-commerce Cadastra

Projeto desenvolvido como parte do processo seletivo para Desenvolvedor Front-end na empresa Cadastra.

Foi realizado um fork de um [projeto setup](https://github.com/Cadastra-Next-Gen-Company/desenvolvedor-cadastra) e desenvolvido as funcionalidades explicadas abaixo.

### Instruções

Para instalar as dependências só é preciso executar o comando: `npm install`

O dar start no server e nos processos para desenvolvimento é necessário rodar o comando: `npm start `

Uma ver que o comando é dado ele irá levantar 2 servidores, sendo eles:

- um para acessar o front-end que roda na porta 3000. No qual pode ser acessado pela url: http://localhost:3000
- um para o json-server que irá export uma api com a lista de produtos que roda na porta 5000. Para acessar os produtos é na url: http://localhost:5000/products

### Objetivo

Implementação de um site de E-commerce de roupas, utilizando HTML5, CSS3 e Typescript, sem frameworks. O layout foi provido e se no [figma](https://www.figma.com/file/Z5RCG3Ewzwm7XIPuhMUsBZ/Desafio-Cadastra?type=design&node-id=0%3A1&mode=design&t=A0G2fRjMSrcQjchw-1).
O site deve ser responsivo e possuir as seguintes funcionalidades:

- Requisição a API para obter os produtos;
- Funcionalidade: Filtrar produtos por cor, tamanho e preço;
- Funcionalidade: Adicionar produto ao carrinho;
- Funcionalidade: Carregar mais produtos.
