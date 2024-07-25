// Importando o módulo de sistema de arquivos
const fs = require('fs')

// Lendo o arquivo 'livros.json' e convertendo para um objeto JavaScript
const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'))

// Criando um novo objeto com as informações do livro
const novoDado = { id: '3', nome: 'Livro mais que demais' }

// Adicionando o novo objeto aos dados atuais e gravando novamente no arquivo 'livros.json'
fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado]))

// Lendo novamente o arquivo 'livros.json' e exibindo no console
console.log(JSON.parse(fs.readFileSync('livros.json')))

//Rodando o arquivo com o comando: node teste.js
