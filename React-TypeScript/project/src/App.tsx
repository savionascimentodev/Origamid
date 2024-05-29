import React from "react"
import Button from "./Button"

function App() {
  const [total, setTotal] = React.useState(0)

  function incrementar() {
    setTotal(total => total + 1)
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button tamanho="2.5rem" onClick={incrementar}>
        Incrementar
      </Button>
    </div>
  )
}

export default App
