'use client'
import { handlers } from './handlers'
import { setupWorker } from '../node_modules/msw/browser'

export const worker = setupWorker(...handlers)
