import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [],
}

export default config
