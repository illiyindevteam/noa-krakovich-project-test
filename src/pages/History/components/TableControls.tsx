import Button from '@/components/ui/Button'
import InputSearch from '@/components/ui/InputSearch'
import { memo } from 'react'
import ChevronDown from '@/assets/icon/chevron-down.svg?react'

interface TableControlsProps {
  onSearch: (query: string) => void
  onSort?: (sortKey: string) => void
}

const TableControls = ({ onSearch }: TableControlsProps) => (
  <div className='flex flex-col justify-between gap-4 sm:flex-row'>
    <InputSearch
      placeholder='Search for your past projects'
      className='w-full max-w-[360px]'
      onChange={(e) => onSearch(e.target.value)}
    />
    <div className='flex gap-4'>
      <Button
        variant='neutral-stroke'
        size='xs'
        text='Sort By'
        rightIcon={<ChevronDown width='100%' height='100%' />}
      />
      <Button variant='neutral-stroke' size='xs' text='Filter' rightIcon={<ChevronDown width='100%' height='100%' />} />
    </div>
  </div>
)

export default memo(TableControls)
