import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_AUTH0_DOMAIN_ID': JSON.stringify(env.REACT_APP_AUTH0_DOMAIN_ID),
      'process.env.REACT_APP_AUTH0_CLIENT_ID': JSON.stringify(env.REACT_APP_AUTH0_CLIENT_ID),
      'process.env.REACT_APP_AUTH0_AUDIENCE_ID': JSON.stringify(env.REACT_APP_AUTH0_AUDIENCE_ID)
    },
    plugins: [react()],
  }
})