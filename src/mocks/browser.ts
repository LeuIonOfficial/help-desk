'use client'
import { setupWorker } from '../../node_modules/msw'
import { mockApiHandlers } from './handlers'

export const worker = setupWorker(...mockApiHandlers)
