import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
}

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <>
      <Checkbox label="Default" />
    </>
  ),
}

export const Playground: Story = {
  args: {
    label: 'Playground',
    name: 'playground',
    disabled: false,
    size: 'medium',
    onChange: action('onchange'),
  },
  render: (props) => <Checkbox {...props} />,
}

export default meta
