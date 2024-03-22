import { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { OutlinedInput } from '.'
import type { PropsType } from './types'

const meta: Meta<typeof OutlinedInput> = {
  title: 'Components/Inputs/OutlinedInput',
  component: OutlinedInput,
}

export default meta
type Story = StoryObj<typeof OutlinedInput>

export const Default: Story = {
  render: () => <OutlinedInput name="requiredProp" />,
}

const renderBox = (direction: 'row' | 'column') => ({
  display: 'flex',
  flexDirection: direction,
  gap: '20px',
})

export const Variants: Story = {
  render: () => (
    <div style={renderBox('column')}>
      <div style={renderBox('row')}>
        <OutlinedInput size="small" name="small" />
        <OutlinedInput size="medium" name="medium" />
      </div>
      <div style={renderBox('row')}>
        <OutlinedInput size="small" name="small" label="Input with label" />
        <OutlinedInput size="medium" name="medium" label="Input with label" />
      </div>
      <div style={renderBox('row')}>
        <OutlinedInput
          size="small"
          name="small"
          label="Input with label"
          errorMessage="And error message"
        />
        <OutlinedInput
          size="medium"
          name="medium"
          label="Input with label"
          errorMessage="And error message"
        />
      </div>
    </div>
  ),
}

export const WithErrorMessage: Story = {
  render: () => (
    <OutlinedInput
      errorMessage="This is an error message"
      value="This is the value"
      label="Error Input"
      name="errorInput"
    />
  ),
}

export const Playground: Story = {
  args: {
    label: 'Playground Input',
    placeholder: 'Type something here',
    size: 'small',
    type: 'text',
    value: '',
    name: 'playgroundInput',
    onChange: action('onChange'),
    onBlur: action('onBlur'),
    errorMessage: '',
  },
  render: (props: PropsType) => {
    return <OutlinedInput {...props} />
  },
}
