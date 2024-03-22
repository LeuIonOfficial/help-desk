'use client'
import { Layout, ConfigForm } from '@components'
import { useGetData } from '@hooks'

export default function Home() {
  const { data, isLoading } = useGetData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No data to display...</div>
  }

  return (
    <Layout>
      <ConfigForm data={data} />
    </Layout>
  )
}
