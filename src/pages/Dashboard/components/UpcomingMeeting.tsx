import CardMeetingSchedule from '@/components/CardMeetingSchedule'
import type { UpcomingMeetingType } from '@/types/dashboard.type'

const UpcomingMeeting = ({ data }: { data: UpcomingMeetingType[] }) => {
  return (
    <section className='rounded-xl border border-soft-100 p-4 md:p-6'>
      <div className='mb-4 w-full'>
        <h2 className='mb-1 font-inter! text-md font-medium! md:text-lg'>Upcoming Meeting</h2>
        <p className='text-sm text-surface-800 md:text-md'>Check your schedule below</p>
      </div>
      <div className='flex w-full flex-col gap-2 md:gap-3'>
        {data.map((item, index) => (
          <CardMeetingSchedule key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default UpcomingMeeting
