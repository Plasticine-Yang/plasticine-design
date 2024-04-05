import type { Meta, StoryObj } from '@storybook/react'

import { SHARED_COLOR_VALUES, SHARED_SIZE_VALUES } from '@plasticine-design/shared'

import '@plasticine-design/styles/css-variables/index.scss'
import '@plasticine-design/styles/components/spinner/index.scss'

import { Spinner } from '../src'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Spinner> = {
  title: 'Example/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    color: 'default',
    size: 'medium',
  },
  argTypes: {
    color: {
      type: { name: 'enum', value: SHARED_COLOR_VALUES },
    },
    size: {
      type: { name: 'enum', value: SHARED_SIZE_VALUES },
    },
  },
}

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: 'default',
    size: 'medium',
  },
}

export default meta
