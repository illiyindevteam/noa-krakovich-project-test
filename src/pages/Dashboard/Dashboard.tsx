import DashboardLayout from '@/components/layouts/DashboardLayout'
import Summaries from './components/Summaries'
import ProjectOverview from './components/ProjectOverview'
import UpcomingMeeting from './components/UpcomingMeeting'
import ProgressSummaries from './components/ProgressSummaries'
import { dashboardData } from '@/data/dashboardData'

const Dashboard = () => {
  const { summary, projectOverview, upcomingMeeting, progressSummaries } = dashboardData

  return (
    <DashboardLayout>
      <div className='w-full px-8'>
        <h1 className='mb-1 text-h4-mobile text-strong-950 md:text-h4'>Good morning, Prada</h1>
        <p className='text-md text-surface-800 md:text-lg'>Welcome to your dashboard.</p>
      </div>

      <div className='flex w-full flex-col gap-4 px-4 md:gap-6 md:px-8'>
        <Summaries data={summary} />

        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2md:grid-cols-[57.5%_41.5%]'>
          <ProjectOverview data={projectOverview} />
          <UpcomingMeeting data={upcomingMeeting} />
        </div>

        <ProgressSummaries data={progressSummaries} />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
