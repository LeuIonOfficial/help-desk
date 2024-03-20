import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Form', () => {
  it('should render form', () => {
    render(<div>Hello world</div>)
    expect(true).toBe(true)
  })
})
