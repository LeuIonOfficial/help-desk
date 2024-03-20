export const useUpdateData = () => {
  // Just for fun
  const updateData = async (formData: string) => {
    const response = await fetch('/settings', {
      method: 'patch',
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    localStorage.setItem('data', JSON.stringify(data))
  }

  return { updateData }
}
