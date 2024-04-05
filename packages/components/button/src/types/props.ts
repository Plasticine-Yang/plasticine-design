import { ButtonHTMLAttributes } from 'react'

import type { SharedColorProp, SharedSizeProp } from '@plasticine-design/shared'

export interface CustomButtonProps {
  /**
   * The button appearance style.
   * @default "solid"
   */
  variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow'

  /**
   * The button color theme.
   * @default "default"
   */
  color?: SharedColorProp

  /**
   * The button size.
   * @default "medium"
   */
  size?: SharedSizeProp

  /**
   * The button border radius.
   * @default "medium"
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'

  /**
   * Whether disable the button press animation.
   * @default false
   */
  disablePressAnimation?: boolean

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean
}

export type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
