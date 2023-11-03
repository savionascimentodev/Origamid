# Componentes

O ideal é dividir o aplicativo em **pequenos componentes** para **facilitar** a **manutenção** do mesmo. Iremos trabalhar durante o curso com componentes funcionais.

```jsx
import React from "react"
// Importando dois componentes;
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      {/* Usando o componente Header */}
      <Header />
      <p>Esse é o meu aplicativo</p>
      {/* Usando o componente Footer */}
      <Footer />
    </div>
  )
}

export default App
```

## Header.js

```jsx
import React from "react"

const Header = () => {
  return (
    <header>
      <a href="./">Marca</a>
      <nav>
        <a href="./">Link 1</a>
        <a href="./">Link 2</a>
      </nav>
    </header>
  )
}

export default Header
```

## Footer.js

```jsx
import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
```

---

# Interface

Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

## Form.js

```jsx
import React from "react"
import Button from "./Button"
import Input from "./Input"

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  )
}

export default Form
```

## Button.js

```jsx
import React from "react"

const Button = () => {
  return <button>Enviar</button>
}

export default Button
```

## Input.js

```jsx
import React from "react"

const Input = () => {
  return <input type="text" />
}

export default Input
```

---

## Return

Um **componente** deve **sempre retornar algo**. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).

```jsx
const Teste = () => {
  const active = true
  if (active) {
    return <p>Ativo</p>
  } else {
    return null
  }
}
```

## React.Fragment

Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do **<React.Fragment></React.Fragment>** ou **<></>**;

```jsx
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  )
}
```

**É a mesma coisa que:**

```jsx
const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  )
}
```
