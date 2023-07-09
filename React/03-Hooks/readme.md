### Estado

O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

```js
const App = () => {
  const ativo = true

  return (
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
  )
}
```

### Hooks

Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

```js
const App = () => {
  const [ativo, setAtivo] = React.useState(true)

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  )
}
```

### React.useState

O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

```js
const App = () => {
  const [ativo, setAtivo] = React.useState(true)
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  )
}
```

O uso de setNome é uma convenção do React para a função de modificação do estado

### Múltiplos Estados

Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

```js
const App = () => {
  const [contar, setContar] = React.useState(0)
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: '', idade: '' })

  return <div></div>
}
```
