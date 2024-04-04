import { ButtonHTMLAttributes } from 'react'

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
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

  /**
   * The button size.
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large'

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
