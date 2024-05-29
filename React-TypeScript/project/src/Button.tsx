import { ComponentProps } from "react"

// Jeito antigo e mais manual;
// type ButtonProps = {
//   tamanho?: string
//   children: ReactNode
//   onClick?: () => void
// }

// O react já dá um tipo utilitário para props children
// type ButtonProps = PropsWithChildren<{
//   tamanho?: string
//   onClick?: () => void
// }>

// O tipo utilitário Component Props já
type ButtonProps2 = ComponentProps<"button"> & {
  tamanho?: string
}

export default function Button({ children, onClick, tamanho }: ButtonProps2) {
  return (
    <button onClick={onClick} style={{ fontSize: tamanho }}>
      {children}
    </button>
  )
}
