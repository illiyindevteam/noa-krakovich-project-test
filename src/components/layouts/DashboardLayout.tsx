import { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/helpers/utils/cn'
import Sidebar from '@/components/layouts/Sidebar'
import Header from '@/components/layouts/Header'
import ChevronLeft from '@/assets/icon/chevron-left.svg?react'

interface DashboardLayoutProps {
  children: React.ReactNode
  activeMenu: string
}

const DashboardLayout = ({ children, activeMenu }: DashboardLayoutProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleShowSidebar = useCallback((value: boolean) => {
    setShowSidebar(value)
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showSidebar && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setShowSidebar(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSidebar])

  return (
    <div className='relative flex w-full bg-weak-50 xl:pl-62'>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn('fixed top-0 left-0 z-50 w-62 transition-all duration-500', {
          'translate-x-0': showSidebar,
          '-translate-x-[120%] xl:translate-x-0': !showSidebar,
        })}
      >
        <Sidebar activeMenu={activeMenu} />
        <button
          className='absolute top-2 right-0 z-10 flex h-7 w-7 translate-1/2 items-center justify-center rounded-lg border border-soft-400 bg-white text-soft-400 transition-all hover:text-strong-950 xl:hidden'
          onClick={() => setShowSidebar(false)}
          aria-label='Close sidebar'
        >
          <ChevronLeft width={20} height={20} />
        </button>
      </div>
      <div
        className={cn('fixed top-0 left-0 z-40 h-screen w-full bg-black opacity-50 xl:hidden', {
          hidden: !showSidebar,
        })}
      ></div>

      {/* Main Content */}
      <div className='mx-auto h-fit min-h-dvh w-full max-w-[2560px] p-2'>
        <div className='flex w-full flex-grow flex-col gap-8 rounded-2xl border border-soft-100 bg-white'>
          <Header onShowSidebar={handleShowSidebar} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
