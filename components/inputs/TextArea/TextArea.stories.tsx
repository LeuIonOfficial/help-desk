import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './index'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  render: () => <TextArea />,
}
