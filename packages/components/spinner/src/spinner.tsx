import { memo, type FC } from 'react'

import type { SpinnerProps } from './types'

const Spinner: FC<SpinnerProps> = memo((props) => {
  return <div>Spinner</div>
})

Spinner.displayName = 'PlasticineDesign.Spinner'

export default Spinner
