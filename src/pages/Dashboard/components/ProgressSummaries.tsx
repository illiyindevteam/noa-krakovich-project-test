import CardSummaryProgress from '@/components/CardSummaryProgress'
import type { ProgressSummaryType } from '@/types/dashboard.type'

const ProgressSummaries = ({ data }: { data: ProgressSummaryType[] }) => {
  return (
    <section className='mb-3 rounded-xl border border-soft-100 p-4 md:mb-4 md:p-6'>
      <div className='mb-4 w-full'>
        <h2 className='mb-1 font-inter! text-md font-medium! md:text-lg'>Project Overview</h2>
        <p className='text-sm text-surface-800 md:text-md'>Check your schedule below</p>
      </div>
      <div className='grid w-full grid-cols-1 gap-2 xs:grid-cols-2 2md:grid-cols-3 md:gap-3'>
        {data.map((item) => (
          <CardSummaryProgress key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}

export default ProgressSummaries
