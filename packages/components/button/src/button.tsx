import { memo, type FC, type MouseEventHandler } from 'react'
import { getClassNameWithPrefix } from '@plasticine-design/shared'

import './styles/button.scss'

export interface ButtonProps {
  type: 'primary' | 'secondary'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = memo((props) => {
  const { type, onClick } = props

  return (
    <button className={getClassNameWithPrefix('button')} onClick={onClick}>
      Hello {type}
    </button>
  )
})

export default Button
