import { staticData } from '@mocks'
import { rest } from 'msw'

export const mockApiHandlers = [
  rest.get('/settings', (req, res, ctx) => {
    return res(ctx.json(staticData))
  }),
  rest.patch('/settings', (req, res, ctx) => {
    const data = JSON.parse(req.body as string)
    Object.keys(data).forEach((key) => {
      staticData[key as keyof typeof staticData] = data[key]
    })
    return res(ctx.json(staticData))
  }),
]
