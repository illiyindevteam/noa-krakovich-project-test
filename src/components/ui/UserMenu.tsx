import ChevronDown from '@/assets/icon/chevron-down.svg?react'
import avatarImage from '@/assets/images/avatar/user-profile.webp'
import { cn } from '@/helpers/utils/cn'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
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
      <button className='flex cursor-pointer items-center gap-3' onClick={handleShowMenu}>
        <img src={avatarImage} alt='Avatar' width={32} height={32} className='h-8 w-8 rounded-full' />
        <p className='text-md whitespace-nowrap text-strong-950'>Brian F.</p>
        <div>
          <ChevronDown width={20} height={20} />
        </div>
      </button>
      <div
        className={cn(
          'absolute right-0 -bottom-3 flex w-[160px] translate-y-full flex-col rounded-xl border border-soft-100 bg-white p-1 transition-all duration-300 md:rounded-2xl',
          {
            'invisible opacity-0': !showMenu,
            'visible opacity-100': showMenu,
          },
        )}
      >
        <Link to='#' className='w-full p-2 text-sm text-surface-800 hover:text-strong-950 md:text-md'>
          My Profile
        </Link>
        <Link to='/login' className='w-full p-2 text-sm text-surface-800 hover:text-strong-950 md:text-md'>
          Logout
        </Link>
      </div>
    </div>
  )
}

export default UserMenu
