'use client'
import { Layout, ConfigForm } from '@components'
import { useGetData } from '@components/system-management/hooks/useGetData'

const Settings = () => {
  const { data, isLoading } = useGetData()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) return <div>No data to display...</div>

  return (
    <Layout>
      <ConfigForm data={data} />
    </Layout>
  )
}

export default Settings
