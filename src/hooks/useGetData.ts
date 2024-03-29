import { worker } from '@mocks/browser'
import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch data from the server and store it in local storage.
 * @returns An object containing the fetched data and a loading state.
 */
export const useGetData = () => {
  const dataFromStorage = localStorage.getItem('data')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const query = async () => {
    setIsLoading(true)
    await worker.start()
    const response = await fetch('/settings')
    const data = await response.json()
    localStorage.setItem('data', JSON.stringify(data))
    setIsLoading(false)
  }

  useEffect(() => {
    query()
  }, [])

  useEffect(() => {
    if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage))
    }
  }, [dataFromStorage])

  return { data, isLoading }
}
