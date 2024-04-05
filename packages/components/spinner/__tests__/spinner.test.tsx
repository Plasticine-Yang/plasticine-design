import { render } from '@testing-library/react'

import { Spinner } from '../src'

describe('Spinner', () => {
  test('should render correctly', () => {
    const renderResult = render(<Spinner />)

    expect(() => renderResult.unmount()).not.toThrow()
  })
})
