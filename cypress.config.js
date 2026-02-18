import { defineConfig } from 'cypress'
const codeCoverageTask = require('@cypress/code-coverage/task')
export default defineConfig({
  allowCypressEnv: false,
  experimentalRunAllSpecs: true,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config)
      return config
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {},
  },
})
