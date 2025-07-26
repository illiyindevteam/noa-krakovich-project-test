import type { SummaryItem } from '@/types/dashboard.type'
import ChevronRight from '@/assets/icon/chevron-right.svg?react'

const CardSummary = ({ label, icon, data, color }: SummaryItem) => {
  return (
    <div className='w-full rounded-lg border border-soft-100 p-3 text-strong-950 md:rounded-xl md:p-6'>
      <div className='mb-2 flex w-full items-center gap-3'>
        <div className='flex size-7 items-center justify-center rounded-lg bg-weak-50 md:size-9'>
          <div className='size-4 md:size-5'>{icon}</div>
        </div>
        <h5 className='flex-grow text-h5-mobile md:text-h5'>{data}</h5>
        <button className='cursor-pointer text-strong-950' aria-label='Next'>
          <ChevronRight width={12} height={12} />
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <div className='size-2 rounded-full' style={{ backgroundColor: color }}></div>
        <p className='text-sm text-sub-600 md:text-md'>{label}</p>
      </div>
    </div>
  )
}

export default CardSummary
