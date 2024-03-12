import { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Button } from '.'
import Box from '@mui/material/Box'
import { Props } from './types'

const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    size: {
      description: 'The size of the button',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'small' },
      },
    },
    variant: {
      description: 'The variant of the button',
      control: { type: 'select' },
      options: ['outlined', 'contained', 'text'],
      table: {
        type: { summary: 'outlined | contained | text' },
        defaultValue: { summary: 'contained' },
      },
    },
    type: {
      description: 'The type of the button',
      control: { type: 'select' },
      options: ['submit', 'button', 'reset'],
      table: {
        type: { summary: 'submit | button | reset' },
        defaultValue: { summary: 'button' },
      },
    },
    isLoading: {
      description:
        'If true, the button will be disabled and show a loading spinner',
      control: { type: 'boolean' },
      options: [true, false],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: 'The function to call when the button is clicked',
      action: action('onclick'),
      table: {
        defaultValue: {
          summary: '{}',
        },
        type: {
          summary: '(event: MouseEventHandler<HTMLButtonElement>) => void',
        },
      },
    },
    loadingIconColor: {
      description: 'The color of the loading spinner',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'inherit'],
      table: {
        type: { summary: 'primary | secondary | inherit' },
        defaultValue: { summary: 'inherit' },
      },
    },
    loadingIconSize: {
      description: 'The size of the loading spinner in px',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    type: 'submit',
    size: 'small',
    variant: 'contained',
    children: 'Submit',
    disabled: false,
  },

  render: ({ type, size, variant, children, disabled, ...props }: Props) => (
    <Button
      type={type}
      size={size}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  ),
}

export const Variant: Story = {
  args: {
    variant: 'contained',
    disabled: false,
  },
  render: ({ variant, disabled, ...props }: Props) => (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small" variant={variant} disabled={disabled} {...props}>
          Small
        </Button>
        <Button size="medium" variant={variant} disabled={disabled} {...props}>
          Medium
        </Button>
        <Button size="large" variant={variant} disabled={disabled} {...props}>
          Large
        </Button>
      </div>
    </Box>
  ),
}

export const Size: Story = {
  args: {
    size: 'small',
    disabled: false,
  },
  render: ({ size, disabled, ...props }: Props) => (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size={size} variant="text" disabled={disabled} {...props}>
          Text
        </Button>
        <Button size={size} variant="outlined" disabled={disabled} {...props}>
          Outlined
        </Button>
        <Button size={size} variant="contained" disabled={disabled} {...props}>
          Contained
        </Button>
      </div>
    </Box>
  ),
}

export const Loading: Story = {
  args: {
    size: 'small',
    isLoading: true,
    loadingIconSize: 20,
    loadingIconColor: 'inherit',
  },
  render: ({ size, disabled, ...props }: Props) => (
    <Box sx={{ '& button': { m: 2 } }}>
      <div>
        <Button variant="text" {...props}>
          Text
        </Button>
        <Button variant="outlined" {...props}>
          Outlined
        </Button>
        <Button variant="contained" {...props}>
          Contained
        </Button>
      </div>
    </Box>
  ),
}
