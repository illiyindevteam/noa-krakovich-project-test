import CaretDoubleVertical from '@/assets/icon/caret-double-vertical.svg?react'
import { memo } from 'react'

interface TableHeaderProps {
  label: string
  sortable?: boolean
  onSort?: () => void
}

const TableHeader = ({ label, sortable = true, onSort }: TableHeaderProps) => (
  <th className='border border-weak-50 bg-weak-50 p-3 text-left text-sub-600'>
    {sortable ? (
      <button
        type='button'
        className='flex cursor-pointer items-center gap-1 text-xs font-medium md:text-sm md:font-normal'
        aria-label={`Sort by ${label}`}
        onClick={onSort}
      >
        {label}
        <CaretDoubleVertical width={12} height={12} aria-hidden='true' />
      </button>
    ) : (
      <span className='text-xs font-medium md:text-sm md:font-normal'>{label}</span>
    )}
  </th>
)

export default memo(TableHeader)
