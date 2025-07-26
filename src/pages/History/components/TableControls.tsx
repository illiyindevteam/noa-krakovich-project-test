import Dropdown from '@/components/ui/Dropdown'
import InputSearch from '@/components/ui/InputSearch'
import { memo } from 'react'

interface TableControlsProps {
  onSearch: (query: string) => void
  onSort: (key: 'name' | 'dueDate' | 'label' | 'status' | '') => void
}

const TableControls = ({ onSearch, onSort }: TableControlsProps) => (
  <div className='flex flex-col justify-between gap-4 sm:flex-row'>
    <InputSearch
      placeholder='Search for your past projects'
      className='w-full max-w-[360px]'
      onChange={(e) => onSearch(e.target.value)}
    />
    <div className='flex gap-4'>
      <Dropdown
        name='Sort by'
        menu={[
          { name: 'Name', action: () => onSort('name') },
          { name: 'Due Date', action: () => onSort('dueDate') },
          { name: 'Label', action: () => onSort('label') },
          { name: 'Status', action: () => onSort('status') },
        ]}
      />
      <Dropdown
        name='Filter'
        menu={[
          { name: 'All', action: () => onSearch('') },
          { name: 'UI Design', action: () => onSearch('UI Design') },
          { name: 'UX Design', action: () => onSearch('UX Design') },
          { name: 'Illustration', action: () => onSearch('Illustration') },
          { name: 'Motion Graphics', action: () => onSearch('Motion Graphics') },
          { name: 'Waiting Feedback', action: () => onSearch('Waiting Feedback') },
          { name: 'In Progress', action: () => onSearch('In Progress') },
          { name: 'Approved', action: () => onSearch('Approved') },
          { name: 'To Do', action: () => onSearch('To Do') },
        ]}
      />
    </div>
  </div>
)

export default memo(TableControls)
