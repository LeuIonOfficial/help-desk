import { Meta, StoryObj } from '@storybook/react'
import TextField from './OutlinedInput'
import type { PropsType } from './types'

import { action } from '@storybook/addon-actions'

const meta: Meta<PropsType> = {
  title: 'Components/Inputs/OutlinedInput',
  component: TextField,
  args: {
    onChange: action('onchange'),
    onBlur: action('onblur'),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
  },
}

export default meta
type Story = StoryObj<PropsType>

export const Default: Story = {
  args: {
    label: 'Default Input',
    name: 'defaultInput',
    type: 'text',
    size: 'medium',
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Error Input',
    name: 'errorInput',
    errorMsg: 'Error message goes here',
    type: 'text',
    size: 'medium',
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    size: 'medium',
  },
}

export const EmailInputSmall: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    size: 'small',
  },
}
