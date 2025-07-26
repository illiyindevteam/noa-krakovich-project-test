import { cn } from '@/helpers/utils/cn'

interface MemberGroupProps {
  members: { avatarUrl: string; name: string }[]
  className?: string
}

const MemberGroup = ({ members, className }: MemberGroupProps) => {
  return (
    <div className={cn('flex h-8 -space-x-[6px] overflow-hidden', className)}>
      {members.map((member) => (
        <img
          key={member.name}
          src={member.avatarUrl}
          alt={member.name}
          width={32}
          height={32}
          className='inline-block aspect-square! h-full rounded-full ring-2 ring-white'
          loading='lazy'
        />
      ))}
    </div>
  )
}

export default MemberGroup
