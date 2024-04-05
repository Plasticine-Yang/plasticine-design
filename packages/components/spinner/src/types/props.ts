import type { SharedColorProp, SharedSizeProp } from '@plasticine-design/shared'

export interface SpinnerProps {
  /**
   * The size of spinner.
   * @default "medium"
   */
  size?: SharedSizeProp

  /**
   * The spinner color theme.
   * @default "default"
   */
  color?: SharedColorProp

  /**
   * Custom className
   */
  className?: string
}
