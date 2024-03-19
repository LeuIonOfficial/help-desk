'use client'
import { staticData } from '@mock'
import { map, mapValues } from 'lodash'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/settings', () => {
    return HttpResponse.json(staticData)
  }),
  http.patch('/settings', async ({ request }) => {
    const response = await request.json()
    const data = JSON.parse(response as string)
    mapValues(data, (values, keys) => {
      staticData[keys as keyof typeof staticData] = values
    })
    return HttpResponse.json(staticData)
  }),
]
