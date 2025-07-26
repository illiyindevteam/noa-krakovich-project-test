import type { ProgressSummaryType } from '@/types/dashboard.type'
import Fatrows from '@/assets/icon/fatrows.svg?react'
import Button from './ui/Button'
import DownloadIcon from '@/assets/icon/download.svg?react'

const CardSummaryProgress = ({ label, task, percentage = 0, icon }: ProgressSummaryType) => {
  return (
    <div className='flex flex-col gap-4 rounded-lg border border-soft-100 bg-white p-3 md:rounded-xl md:p-6'>
      <div className='flex justify-between gap-2'>
        <div className='flex flex-grow items-center gap-2'>
          <div className='flex size-8 items-center justify-center rounded-sm bg-weak-50 text-strong-950 md:size-10 md:rounded-lg'>
            <div className='size-[18px] md:size-6'>{icon}</div>
          </div>
          <h5 className='flex-grow font-inter! text-sm font-medium! md:text-md'>{label}</h5>
        </div>
        <Button
          leftIcon={<DownloadIcon width='100%' height='100%' />}
          variant='neutral-stroke'
          size='xs'
          className='h-fit w-fit'
        />
      </div>
      <div className='w-full'>
        <div className='mb-2 flex items-center justify-between text-xs text-sub-600 md:text-sm'>
          <div className='flex gap-1'>
            <Fatrows width={16} height={16} />
            <span> {task} Task</span>
          </div>
          <p>{percentage}%</p>
        </div>
        <div className='relative h-[6px] w-full rounded-full bg-weak-50'>
          <div className='absolute top-0 left-0 h-full' style={{ width: `${percentage}%` }}>
            <div className='h-full w-full animate-grow-bar rounded-full bg-primary-base'></div>
          </div>
        </div>
      </div>
      <Button text='See Details' variant='neutral-stroke' size='md' className='w-full' />
    </div>
  )
}

export default CardSummaryProgress
