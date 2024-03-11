import { Meta, StoryObj } from '@storybook/react'
import TextField from './OutlinedInput'
import type { PropsType } from './types'

import { action } from '@storybook/addon-actions'

const meta: Meta<PropsType> = {
  title: 'Components/Inputs/OutlinedInput',
  component: TextField,
  args: {
    onChange: action('onchange'),
  },
}

export default meta
type Story = StoryObj<PropsType>

export const Default: Story = {
  args: {
    label: 'Label',
    fullWidth: false,
    type: 'text',
    size: 'small',
  },
}
