'use client'
import { worker } from '@mock/browser'
import { useEffect, useState } from 'react'
import { json } from 'stream/consumers'

export const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const query = async () => {
    setIsLoading(true)
    await worker.start()
    const response = await fetch('/settings')
    const data = await response.json()
    setData(data)
    setIsLoading(false)
  }

  // Just for fun
  const updateData = async (formData: any) => {
    const response = await fetch('/settings', {
      method: 'patch',
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    query()
  }, [])

  return { data, isLoading, updateData }
}
