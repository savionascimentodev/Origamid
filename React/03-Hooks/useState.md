# UseState

## Estado

O **estado de uma aplicação representa as características dela naquele momento**. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

```js
const App = () => {
  const ativo = true

  return (
    <button disabled={!ativo}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>
  )
}
```

## Hooks

Os **Hooks** são **funções especiais do React** que **permitem controlarmos o estado e o ciclo de vida de componentes funcionais**. Isso antes só era possível com classes.

```js
const App = () => {
  const [ativo, setAtivo] = React.useState(true)

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  )
}
```

## React.useState

O **useState é uma função que retorna uma Array com 2 valores.** O **primeiro valor guarda o dado do estado atual**, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O **segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valo**r.

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
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  )
}
```

O uso de **setAtivo** é uma **convenção do React para a função de modificação do estado**.

## Múltiplos Estados

Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

```js
const App = () => {
  const [contar, setContar] = React.useState(0)
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: "", idade: "" })

  return <div></div>
}
```

## Props

Podemos passar o estado e a função de modificação como propriedades para outros elementos.

```js
import React from "react"
import Modal from "./Modal"
import ButtonModal from "./ButtonModal"

const App = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App
```

###### ButtonModal.js

```js
import React from "react"

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir Modal</button>
}

export default ButtonModal
```

###### Modal.js

```js
import React from "react"

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    )
  return null
}

export default Modal
```

## Reatividade

**Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.**

```js
const App = () => {
  const [items, setItems] = React.useState(["Item 1", "Item 2"])

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push("Novo Item")
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, "Novo Item"])
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  )
}
```
