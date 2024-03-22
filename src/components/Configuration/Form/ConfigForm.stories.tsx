import { Meta, StoryObj } from '@storybook/react'

import { ConfigForm } from '.'
import { staticData } from '@mocks'
import { rest } from 'msw'
import { useGetData } from '@hooks'

const meta: Meta<typeof ConfigForm> = {
  title: 'Pages/Form/ConfigForm',
  component: ConfigForm,
}

export default meta
type Story = StoryObj<typeof ConfigForm>

export const Default: Story = {
  render: () => {
    const { data, isLoading } = useGetData()

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (!data) {
      return <div>No data to display...</div>
    }

    return <ConfigForm data={data} />
  },
}
