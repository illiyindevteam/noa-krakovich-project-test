import { cn } from '@/helpers/utils/cn'
import { useEffect, useRef, useState } from 'react'
import ChevronDown from '@/assets/icon/chevron-down.svg?react'
import Button from './Button'

interface DropdownProps {
  name: string
  menu: {
    name: string
    action: () => void
  }[]
  isAutoClose?: boolean
  classNameMenu?: string
}

const Dropdown = ({ name, menu, isAutoClose = true, classNameMenu }: DropdownProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleShowMenu = () => setShowMenu((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the menu and the button
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])
  return (
    <div className='relative' ref={menuRef}>
      <div className='relative' ref={menuRef}>
        <Button
          variant='neutral-stroke'
          size='xs'
          text={name}
          rightIcon={<ChevronDown width='100%' height='100%' />}
          onClick={handleShowMenu}
        />
        <div
          className={cn(
            'absolute right-0 -bottom-[6px] flex w-fit min-w-[80px] translate-y-full flex-col rounded-md border border-soft-100 bg-white transition-all duration-300 md:rounded-lg',
            {
              'invisible opacity-0': !showMenu,
              'visible opacity-100': showMenu,
            },
            classNameMenu,
          )}
        >
          {menu.map((item, index) => (
            <button
              key={index}
              className='w-full px-2 py-1 text-left text-xs whitespace-nowrap text-surface-800 hover:text-strong-950'
              onClick={() => {
                item.action()
                if (isAutoClose) {
                  setShowMenu(false)
                }
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
