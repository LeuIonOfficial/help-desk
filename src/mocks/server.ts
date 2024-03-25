import { mockApiHandlers } from './handlers'
import { setupServer } from 'msw/node'

export const server = setupServer(...mockApiHandlers)
