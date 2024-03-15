import { Layout, ConfigForm } from '@components'

const staticState = {
  isLoading: false,
  data: true,
  isFetching: false,
}

const Settings = () => {
  if (staticState.isFetching || staticState.isLoading) {
    return <div>Loading...</div>
  }

  if (!staticState.data) return <div>No data to display...</div>

  return (
    <Layout>
      <ConfigForm />
    </Layout>
  )
}

export default Settings
