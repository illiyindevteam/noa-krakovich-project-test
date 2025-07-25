import clsx from 'clsx'
import type { ClassValue } from 'clsx'
import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge'

const customTwMerge = createTailwindMerge(() => {
  const config = getDefaultConfig()

  return {
    ...config,
    classGroups: {
      ...config.classGroups,
    },
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
