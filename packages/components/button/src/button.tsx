import { memo, type FC, type MouseEventHandler } from 'react'

export interface ButtonProps {
  type: 'primary' | 'secondary'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = memo((props) => {
  const { type, onClick } = props

  return <button onClick={onClick}>Hello {type}</button>
})

export default Button
