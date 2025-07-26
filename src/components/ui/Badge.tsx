import { cn } from '@/helpers/utils/cn'
import type { HtmlHTMLAttributes } from 'react'

interface BadgeProps extends HtmlHTMLAttributes<HTMLDivElement> {
  name: string
  withDot?: boolean
  className?: string
}

const Badge = ({ name, withDot, className, ...props }: BadgeProps) => {
  return (
    <div className={cn('w-fit rounded-sm px-2 py-[2px] text-xs font-medium', className)} {...props}>
      <p className='text-nowrap'>
        {withDot && <span className='mr-[6px]'>•</span>}
        {name}
      </p>
    </div>
  )
}

export default Badge
