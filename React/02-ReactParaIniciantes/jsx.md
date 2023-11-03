# JSX

JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.

```jsx
const App = () => {
  return <button>Comprar</button>
}
```

É **transformado** em:

```jsx
const App = () => {
  return React.createElement("button", null, "Comprar")
}
```

**É possível utilizar a extensão .jsx**

## Atributos

**Atributos** podem ser **passados** como no **HTML**, porém com alguns casos especiais.

```jsx
const App = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  )
}
```

## Casos Especiais

O caso especial mais comum é o **atributo class.** Pelo fato de **class** ser uma **palavra reservada do JavaScript,** o **JSX** resolveu mudar o nome para evitar conflitos. O correto é **className**, a mesma coisa para o antes **for** agora é chamado de **htmlFor**.

```jsx
const App = () => {
  return <div className="grid">Origamid</div>
}
```

```jsx
const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  )
}
```

## camelCase

Atributos com **nomes compostos** devem ser utilizados como **camelCase**. Exemplo: **autoplay** vira **autoPlay**.

```jsx
const App = () => {
  return <video autoPlay />
}
```

## Expressões / Variáveis

**Expressões** e **variáveis** podem ser colocadas dentro do JSX, u**tilizando chaves {}**.

```jsx
// Por exemplo: renderizando o valor dentro da váriavel;
const App = () => {
  const nome = "André"
  return <p>{nome}</p>
}
```

```jsx
// Por exemplo: renderizando expressões js;
const App = () => {
  const desconto = 50
  const preco = 250
  return <p>{preco - desconto}</p>
}
```

```jsx
// Por exemplo: mudando a classe do elemento dinâmicamente se ele for ativo ou não,
const App = () => {
  const ativo = true
  return <p className={ativo ? "ativo" : "inativo"}>Estoque</p>
}
```

Também posso atribuir **JSX** direto a uma **constante/variável**.

```jsx
const Titulo = <h1>Meu título</h1>

const App = () => {
  return <div>{Titulo}</div>
}
```

## JSX Expressões

Você pode executar qualquer **expressão** dentro das **chaves {}**. Se o resultado da expressão for um **número**, **string ou array de números/strings** o **resultado irá aparecer na tela**. **Booleanos (true/false)**, **undefined** e **null** **não irão resultar em nada na tela**. **Objetos** irão **retornar** um **erro**.

```jsx
const App = () => {
  function meuNome() {
    return "Sávio"
  }

  function quadrado(x) {
    return x * x
  }

  const carro = {
    rodas: 4,
    marca: "Ford"
  }

  return (
    <div>
      <p>{"MINHA EMPRESA".toLowerCase()}</p> // minha empresa;
      <p>{30 * 2}</p> // 60;
      <p>{true}</p> // Não aparece na tela;
      <p>{undefined}</p> // Não aparece na tela;
      <p>{(() => "Função Executada")()}</p>
      <p>{meuNome()}</p> // Sávio;
      <p>{quadrado(2)}</p> // 4;
      <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p> // Fórmula
      correta;
      <p>{quadrado(2) === 4 && "Fórmula correta"}</p>
      <p>{Date.now()}</p> // Data atual;
      <p>{new Date().getFullYear()}</p> // Ano atual;
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  )
}
```

## Style

O **style** irá receber um **objeto** com as **propriedades** do **elemento** em **camelCase**.

```jsx
const App = () => {
  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica"
  }

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: "green" }}>Sempre aberta</p>
    </div>
  )
}
```
