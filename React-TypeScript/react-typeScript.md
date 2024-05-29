# React + TypeScript

## Inferência

Inferência de tipos é um recurso do **TypeScript** que permite ao **compilador deduzir automaticamente os tipos de variáveis e expressões** com base nos valores atribuídos a elas, **sem a necessidade de uma anotação explícita do tipo**. Isso torna o código mais conciso e legível, mantendo a segurança de tipos.

> No React, a inferência de tipos pode ser extremamente útil, especialmente quando se trata de componentes, props, estados e funções.

### Vantagens da Inferência de Tipos

- **Redução da Verbosidade:** Não é necessário declarar explicitamente os tipos em todos os lugares, o que reduz a quantidade de código boilerplate.
- **Melhoria na Manutenção:** Com tipos inferidos corretamente, mudanças no código são menos propensas a introduzir erros, já que o TypeScript pode detectar problemas mais cedo.
- **Melhoria na Autocompletar:** Ferramentas de desenvolvimento podem fornecer autocompletar e sugestões mais precisas com base na inferência de tipos.

```tsx
// App.tsx
import React from "react"

function App() {
  const [total, setTotal] = React.useState(0)

  function incrementar() {
    setTotal(total => total + 1)
  }

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App
```

---

## Props

É preciso anotar as props que um componente recebe.

### PropsWithChildren

**Tipo nativo do React que já anota a children das props. Recebe uma interface genérica em <>.**

```tsx
import React from "react"

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void
  tamanho?: string
}>

const Button = (props: ButtonProps) => {
  return (
    <button style={{ fontSize: props.tamanho }} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
```

### Desestruturação

A desestruturação é uma técnica do JavaScript/TypeScript que permite extrair valores de objetos ou arrays de maneira concisa. Em componentes React, a desestruturação é comumente usada para extrair props diretamente nos parâmetros da função do componente.

```tsx
import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  tamanho?: string;
}>;

export default function Button = ({ children, onClick, tamanho }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Component Props

Ao criarmos um componente, podemos perder as funcionalidades de auto-completar do TypeScript. O TypeScript não é capaz de prever quais elementos ou propriedades estão sendo utilizados dentro do nosso componente.

> Com o React.ComponentProps<'tag'>, podemos informar que tipo de propriedades aquele componente deve ter.

```tsx
import { ComponentProps } from "react"

// Extendo a prop tamanho também nesse caso;
type ButtonProps = ComponentProps<"button"> & {
  tamanho?: string
}

const Button = ({ children, tamanho, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  )
}

export default Button
```
