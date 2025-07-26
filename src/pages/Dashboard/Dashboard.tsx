import { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/helpers/utils/cn'
import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import Summaries from './components/Summaries'
import ProjectOverview from './components/ProjectOverview'
import UpcomingMeeting from './components/UpcomingMeeting'
import ProgressSummaries from './components/ProgressSummaries'
import { dashboardData } from '@/data/dashboardData'
import ChevronLeft from '@/assets/icon/chevron-left.svg?react'

const Dashboard = () => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [showSidebar, setShowSidebar] = useState(false)

  const { summary, projectOverview, upcomingMeeting, progressSummaries } = dashboardData

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
        className={cn('fixed top-0 left-0 z-50 w-62 transition-all duration-300', {
          'translate-x-0': showSidebar,
          '-translate-x-[120%] xl:translate-x-0': !showSidebar,
        })}
        aria-hidden={!showSidebar}
      >
        <Sidebar />
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
      <div className='mx-auto w-full max-w-[1536px] p-2'>
        <div className='flex w-full flex-grow flex-col gap-8 rounded-2xl border border-soft-100 bg-white'>
          <Header onShowSidebar={handleShowSidebar} />
          <div className='w-full px-8'>
            <h1 className='mb-1 text-h4-mobile text-strong-950 md:text-h4'>Good morning, Prada</h1>
            <p className='text-md text-surface-800 md:text-lg'>Welcome to your dashboard.</p>
          </div>

          <div className='flex w-full flex-col gap-4 px-4 md:gap-6 md:px-8'>
            <Summaries data={summary} />

            <div className='grid w-full grid-cols-1 gap-4 2md:grid-cols-[57.5%_41.5%] md:grid-cols-2 md:gap-6'>
              <ProjectOverview data={projectOverview} />
              <UpcomingMeeting data={upcomingMeeting} />
            </div>

            <ProgressSummaries data={progressSummaries} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
