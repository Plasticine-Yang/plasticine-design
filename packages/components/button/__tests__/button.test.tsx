import { act, render } from '@testing-library/react'

import { Button } from '../src'

describe('Button', () => {
  test('should render correctly', () => {
    const renderResult = render(<Button>Button</Button>)

    expect(() => renderResult.unmount()).not.toThrow()
  })

  test('should ignore events when disabled', () => {
    const onClick = vi.fn()
    const { getByRole } = render(<Button disabled onClick={onClick} />)

    act(() => {
      getByRole('button').click()
    })

    expect(onClick).not.toHaveBeenCalled()
  })

  test('should have the proper type attribute', () => {
    const wrapper = render(<Button type="submit" />)

    expect(wrapper.getByRole('button').getAttribute('type')).toBe('submit')
  })
})
