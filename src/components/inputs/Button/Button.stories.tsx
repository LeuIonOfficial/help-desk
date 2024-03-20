import { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Button } from '.'
import Box from '@mui/material/Box'
import { Props } from './types'

const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => (
    <>
      <Button>Default</Button>
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <Button variant="text" size="small">
            Small
          </Button>
          <Button variant="text" size="medium">
            Medium
          </Button>
          <Button variant="text" size="large">
            Large
          </Button>
          <Button variant="text" size="large" isLoading>
            Loading
          </Button>
        </div>
      </Box>
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
            <Button variant="outlined" size="large" isLoading>
              Loading
            </Button>
          </div>
        </div>
      </Box>
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
            <Button variant="contained" size="large" isLoading>
              Loading
            </Button>
          </div>
        </div>
      </Box>
    </>
  ),
}

export const Playground: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    type: 'button',
    isLoading: false,
    onClick: action('onclick'),
    children: 'Playground Button',
    iconColor: 'inherit',
    iconSize: 24,
  },
  render: ({ children, ...rest }: Props) => (
    <Button {...rest}>{children}</Button>
  ),
}

export default meta
