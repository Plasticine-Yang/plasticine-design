import { memo, useMemo, type FC } from 'react'

import { clsx } from '@plasticine-design/shared'

import { SPINNER_CLASS_NAME_PREFIX } from './constants'
import type { SpinnerProps } from './types'

const Spinner: FC<SpinnerProps> = memo((props) => {
  const { color = 'default', size = 'medium', className: externalClassName } = props

  const className = useMemo(
    () =>
      clsx(
        SPINNER_CLASS_NAME_PREFIX,
        // className with color
        `${SPINNER_CLASS_NAME_PREFIX}-color--${color}`,
        // className with size
        `${SPINNER_CLASS_NAME_PREFIX}-size--${size}`,
        // external className
        externalClassName,
      ),
    [color, externalClassName, size],
  )

  return (
    <div className={className}>
      {/* spinner */}
      <div className={`${SPINNER_CLASS_NAME_PREFIX}__wrapper`}>
        {/* spinner circle 1 - solid ease line */}
        <i className={`${SPINNER_CLASS_NAME_PREFIX}__circle-1`}></i>

        {/* spinner circle 2 - dotted linear line */}
        <i className={`${SPINNER_CLASS_NAME_PREFIX}__circle-2`}></i>
      </div>
    </div>
  )
})

Spinner.displayName = 'PlasticineDesign.Spinner'

export default Spinner
