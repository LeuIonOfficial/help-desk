import { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
import type { PropsType } from './types'

import { action } from '@storybook/addon-actions'

const meta: Meta<PropsType> = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  args: {
    onChange: action('onchange'),
  },
}

const Template = (args) => {
  return <TextField {...args}></TextField>
}

export default meta
type Story = StoryObj<PropsType>

export const Default = Template.bind<Story>({})
Default.args = {
  label: 'Label',
  fullWidth: false,
  size: 'small',
  type: 'text',
}
