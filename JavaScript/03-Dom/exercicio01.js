// EXERCICIO 01

// Retorne o url da página atual utilizando o objeto window
const URL = window.location.href

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const activeElement = window.document.querySelector('.ativo')

// Retorne a linguagem do navegador
const language = window.navigator.language

// Retorne a largura da janela
const windowWidth = window.innerWidth

// Obs: não é necessário usar o `window`, pois é um objeto global