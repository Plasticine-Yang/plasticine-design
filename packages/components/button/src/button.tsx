import { memo, type FC, PropsWithChildren, useMemo } from 'react'

import { getClassNameWithPrefix, clsx } from '@plasticine-design/shared'

import type { ButtonProps } from './types'

const baseClassName = getClassNameWithPrefix('button')

const Button: FC<PropsWithChildren<ButtonProps>> = memo((props) => {
  const { variant = 'solid', color = 'default', size = 'medium', radius = 'medium', children, onClick } = props

  const className = useMemo(
    () =>
      clsx(
        baseClassName,
        // className with variant
        `${baseClassName}-variant--${variant}`,
        // className with color
        `${baseClassName}-color--${color}`,
        // className with size
        `${baseClassName}-size--${size}`,
        // className with radius
        `${baseClassName}-radius--${radius}`,
      ),
    [color, radius, size, variant],
  )

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
})

Button.displayName = 'PlasticineDesignButton'

export default Button
