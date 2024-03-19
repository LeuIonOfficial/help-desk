import { handlers } from './handlers'
import { setupServer } from '../node_modules/msw/node'

export const server = setupServer(...handlers)
