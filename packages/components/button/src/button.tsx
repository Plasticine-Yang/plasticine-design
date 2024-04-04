import { PropsWithChildren, memo, useMemo, type FC } from 'react'

import { clsx } from '@plasticine-design/shared'

import { BUTTON_CLASS_NAME_PREFIX } from './constants'
import type { ButtonProps } from './types'

const Button: FC<PropsWithChildren<ButtonProps>> = memo((props) => {
  const {
    variant = 'solid',
    color = 'default',
    size = 'medium',
    radius = 'medium',
    disablePressAnimation = false,
    disabled = false,
    className: externalClassName,
    children,
    ...restProps
  } = props

  const className = useMemo(
    () =>
      clsx(
        BUTTON_CLASS_NAME_PREFIX,
        // className with variant
        `${BUTTON_CLASS_NAME_PREFIX}-variant--${variant}`,
        // className with color
        `${BUTTON_CLASS_NAME_PREFIX}-color--${color}`,
        // className with size
        `${BUTTON_CLASS_NAME_PREFIX}-size--${size}`,
        // className with radius
        `${BUTTON_CLASS_NAME_PREFIX}-radius--${radius}`,
        // className with press animation
        !disablePressAnimation && `${BUTTON_CLASS_NAME_PREFIX}-press-animation`,
        // className with disabled
        disabled && `${BUTTON_CLASS_NAME_PREFIX}--disabled`,
        // external className
        externalClassName,
      ),
    [color, disablePressAnimation, disabled, externalClassName, radius, size, variant],
  )

  return (
    <button {...restProps} className={className} disabled={disabled}>
      {children}
    </button>
  )
})

Button.displayName = 'PlasticineDesignButton'

export default Button
