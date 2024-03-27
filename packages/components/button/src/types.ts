import { type MouseEventHandler } from 'react'

export interface ButtonProps {
  /**
   * The button appearance style.
   * @default "solid"
   */
  variant?: 'solid'

  /**
   * The button color theme.
   * @default "default"
   */
  color?: 'default'

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
   * The native button click event handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}
