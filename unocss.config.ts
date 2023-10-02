import { defineConfig, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx}']
  },
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  shortcuts: {
    'brd': 'b-gray-2 border-0.25 dark:border-0',
    'bg-card': 'bg-white color-black dark:bg-dark-6 dark:color-warmgray-2',
    'text-primary-foreground': 'font-bold color-white dark:color-black',
    'text-secondary-foreground': 'font-bold color-black dark:color-white',
    'text-destructive-foreground': 'font-bold color-red-6 dark:color-red-4',
    'text-foreground': ' font-bold border-0.25 border-gray-3 color-black dark:color-white dark:border-dark-1',
    'inAnim': 'transition duration-300 ease-in-out from-opacity-0 to-opacity-100',
  }
})
