import CardSummary from '@/components/CardSummary'
import type { SummaryItem } from '@/types/dashboard.type'

const Summaries = ({ data }: { data: SummaryItem[] }) => {
  return (
    <section id='summaries' className='w-full'>
      <div className='grid grid-cols-2 gap-2 xs:gap-4 2md:grid-cols-4 2md:gap-6'>
        {data.map((item) => (
          <CardSummary key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Summaries
