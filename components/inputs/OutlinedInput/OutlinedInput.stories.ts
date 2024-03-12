import { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { OutlinedInput } from '.'

const meta: Meta<typeof OutlinedInput> = {
  title: 'Components/Inputs/OutlinedInput',
  component: OutlinedInput,
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
type Story = StoryObj<typeof OutlinedInput>

export const Default: Story = {
  args: {
    label: 'Default Input',
    name: 'defaultInput',
    size: 'small',
    type: 'text'
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Error Input',
    name: 'errorInput',
    errorMsg: 'Error message goes here',
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
}

export const EmailInputSmall: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
}

export const NumberInputSmall: Story = {
  args: {
    label: 'Number',
    name: 'number',
    type: 'number',
  },
}