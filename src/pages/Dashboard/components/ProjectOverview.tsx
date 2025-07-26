import type { ProjectOverviewType } from '@/types/dashboard.type'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ProjectOverview = ({ data }: { data: ProjectOverviewType }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#2F185E',
        displayColors: false,
        borderWidth: 1,
        title: {
          display: false,
        },
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (context: any) => {
            const value = context.formattedValue || ''
            return `${value}`
          },
        },
        body: {
          display: true,
          color: '#FFFFFF',
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
    },
  }

  const dataChart = {
    labels: data.labels,
    datasets: [
      {
        label: '',
        data: data.data,
        backgroundColor: data.color,
        borderColor: data.color,
        borderWidth: 1,
        borderRadius: 8,
        spacing: 8,
      },
    ],
  }

  return (
    <section className='rounded-xl border border-soft-100 p-4 md:p-6'>
      <div className='mb-4 w-full'>
        <h2 className='mb-1 font-inter! text-md font-medium! md:text-lg'>Project Overview</h2>
        <p className='text-sm text-surface-800 md:text-md'>Check your schedule below</p>
      </div>
      <div className='flex w-full flex-col items-center gap-6 min-[580px]:flex-row md:flex-col'>
        <div className='relative size-[240px] xxs:size-[300px] sm:size-[320px] 2md:size-[380px] lg:size-[438px]'>
          <Doughnut
            data={dataChart}
            options={options}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <h2 className='mb-1 text-h2-mobile 2md:text-h2'>72</h2>
            <p>Total Projects</p>
          </div>
        </div>
        <div className='flex w-full flex-wrap justify-center gap-3 min-[580px]:flex-col md:flex-row md:gap-4'>
          {data.labels.map((item, index) => (
            <div key={item} className='flex items-center gap-2'>
              <div className='size-2 rounded-full' style={{ backgroundColor: data.color[index] }}></div>
              <p className='text-sm font-medium! md:text-md'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectOverview
