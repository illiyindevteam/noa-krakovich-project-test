import CheckIcon from '@/assets/icon/check.svg?react'
import Badge from '@/components/ui/Badge'
import MemberGroup from '@/components/ui/MemberGroup'
import type { HistoryItem } from '@/types/history.type'
import { memo } from 'react'

interface TableRowProps {
  history: HistoryItem
}

const TableRow = ({ history }: TableRowProps) => (
  <tr>
    <td data-cell='Task Name'>
      <div className='flex h-full items-center gap-3 text-sm text-strong-950'>
        <div className='relative hidden size-5 min-w-5 md:block'>
          <input
            type='checkbox'
            className={`peer size-full appearance-none rounded-md border-2 border-soft-100 bg-white transition-colors duration-200 outline-none checked:border-primary-base`}
          />
          <div className='pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-base opacity-0 transition-opacity duration-200 peer-checked:opacity-100'>
            <CheckIcon width='100%' height='100%' />
          </div>
        </div>
        {history.name}
      </div>
    </td>
    <td data-cell='Due Date'>
      <p className='text-sm text-nowrap text-sub-600'>{history.dueDate}</p>
    </td>
    <td data-cell='Label'>
      <Badge
        name={history.label.text}
        style={{ backgroundColor: history.label.bgColor, color: history.label.textColor }}
      />
    </td>
    <td data-cell='Status'>
      <Badge
        name={history.status.text}
        className='rounded-full'
        withDot
        style={{ backgroundColor: history.status.bgColor, color: history.status.textColor }}
      />
    </td>
    <td data-cell='Member'>
      <MemberGroup members={history.members} className='h-6 -space-x-[4px] [&>img]:h-6 [&>img]:w-6' />
    </td>
    <td data-cell='Action'></td>
  </tr>
)

export default memo(TableRow)
