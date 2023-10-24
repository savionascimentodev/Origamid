# JSX Arrays

O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

```js
const App = () => {
  const produtos = ["Notebook", "Smartphone", "Tablet"]

  return <p>{produtos}</p> //NotebokSmartphoneTablet
}
```

## Keys

O JSX necessita de uma **key única** para **cada elemento da Array**.

```js
const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>]

  return <ul>{empresas}</ul>
}
```

## Map

É comum usarmos o **map** **direto na array como uma expressão**, retornando um elemento para cada item novo da Array.

```js
const App = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"]

  return (
    <ul>
      {filmes.map(filme => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  )
}
```

## Array de Objetos

O cenário mais comum é trabalhar com **array's de objetos**.

```js
const App = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 }
  ]

  return (
    <ul>
      {livros
        .filter(livro => livro.ano >= 1998)
        .map(livro => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  )
}
```
