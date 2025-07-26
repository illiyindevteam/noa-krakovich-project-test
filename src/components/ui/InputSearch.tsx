'use client'

import React, { useEffect, useRef, useState } from 'react'
import Command from '@/assets/icon/command.svg?react'
import SearchSm from '@/assets/icon/search.svg?react'
import { cn } from '@/helpers/utils/cn'

type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement>

const InputSearch = ({ className, ...props }: InputSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // For Mac (⌘F) or Windows/Linux (Ctrl+F)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={cn('relative h-10 w-full', className)}>
      <SearchSm className='absolute top-1/2 left-3 z-10 h-5 w-5 -translate-y-1/2 text-soft-400' />
      <input
        ref={inputRef}
        className={`absolute h-full w-full rounded-lg bg-weak-50 py-2 pr-12 pl-11 text-sm text-strong-950 outline-none placeholder:text-soft-400 ${className}`}
        placeholder='Search'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {!isFocused && (
        <div className='absolute top-1/2 right-3 z-10 flex -translate-y-1/2 gap-2'>
          <div className='flex h-6 w-6 items-center justify-center rounded bg-[#9da4ae10] text-[#727272]'>
            <Command width={12} height={12} />
          </div>
          <div className='flex h-6 w-6 items-center justify-center rounded bg-[#9da4ae10] text-[#727272]'>F</div>
        </div>
      )}
    </div>
  )
}

export default InputSearch
