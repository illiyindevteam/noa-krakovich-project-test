import type { UpcomingMeetingType } from '@/types/dashboard.type'
import MemberGroup from './ui/MemberGroup'

const CardMeetingSchedule = ({ date, time, title, description, members }: UpcomingMeetingType) => {
  return (
    <div className='w-full rounded-lg border border-soft-100 p-3 md:rounded-xl md:p-4'>
      <div className='flex gap-1 md:gap-3'>
        <div className='rounded-full bg-feature-lighter px-2 py-[2px] text-strong-950'>
          <p className='text-xxs md:text-xs'>{date}</p>
        </div>
        <div className='rounded-full bg-feature-lighter px-2 py-[2px] text-strong-950'>
          <p className='text-xxs md:text-xs'>{time}</p>
        </div>
      </div>
      <div className='mt-2 mb-[6px]'>
        <h4 className='font-inter! text-sm font-medium! text-strong-950 md:text-md'>{title}</h4>
        <p className='text-sm text-surface-800 md:text-md'>{description}</p>
      </div>
      <div className='flex w-full justify-between'>
        <MemberGroup members={members} />
        {/* <Button /> */}
      </div>
    </div>
  )
}

export default CardMeetingSchedule
