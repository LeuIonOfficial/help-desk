import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../src/utils'
import { GlobalStyles } from '../src/components'
import React from 'react'
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  loaders: [mswLoader],
}

export default preview
