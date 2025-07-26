import InputSearch from '@/components/ui/InputSearch'
import { memo } from 'react'

interface TableControlsProps {
  onSearch: (query: string) => void
  onSort?: (sortKey: string) => void
}

const TableControls = ({ onSearch }: TableControlsProps) => (
  <div className='flex items-center justify-between'>
    <InputSearch
      placeholder='Search for your past projects'
      className='max-w-[360px]'
      onChange={(e) => onSearch(e.target.value)}
    />
    <div>Filter</div>
  </div>
)

export default memo(TableControls)
