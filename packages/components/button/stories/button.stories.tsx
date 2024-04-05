import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { SHARED_COLOR_VALUES, SHARED_SIZE_VALUES } from '@plasticine-design/shared'
import '@plasticine-design/styles/components/button/index.scss'
import '@plasticine-design/styles/css-variables/index.scss'

import { Button } from '../src'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: 'solid',
    color: 'default',
    size: 'medium',
    radius: 'medium',
    disablePressAnimation: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    color: {
      type: {
        name: 'enum',
        value: SHARED_COLOR_VALUES,
      },
    },
    size: {
      type: {
        name: 'enum',
        value: SHARED_SIZE_VALUES,
      },
    },
  },
}

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'default',
    size: 'medium',
    radius: 'medium',
    disablePressAnimation: false,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export default meta
