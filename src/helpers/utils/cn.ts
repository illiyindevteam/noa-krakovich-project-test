import clsx from 'clsx'
import type { ClassValue } from 'clsx'
import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge'

const customTwMerge = createTailwindMerge(() => {
  const config = getDefaultConfig()

  return {
    ...config,
    classGroups: {
      ...config.classGroups,
      'font-size': ['text-xxs', 'text-xs', 'text-sm', 'text-md', 'text-lg', 'text-xl'],
    },
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
