import { memo, type ReactNode } from 'react'
import logoImage from '@/assets/images/logo-brand-small.webp'
import CaretDoubleVertical from '@/assets/icon/caret-double-vertical.svg?react'
import CategoryIcon from '@/assets/icon/category.svg?react'
import FatrowsIcon from '@/assets/icon/fatrows.svg?react'
import HistoryIcon from '@/assets/icon/history.svg?react'
import NotificationIcon from '@/assets/icon/notification-bing.svg?react'
import CalendarIcon from '@/assets/icon/calendar-days.svg?react'
import HeadphoneIcon from '@/assets/icon/headphone.svg?react'
import LikeIcon from '@/assets/icon/like.svg?react'
import { cn } from '@/helpers/utils/cn'
import { useNavigate } from 'react-router-dom'

type MenuItemProps = {
  name: string
  icon: ReactNode
  path: string
}

const MAIN_MENU_ITEMS: MenuItemProps[] = [
  { name: 'Dashboard', icon: <CategoryIcon width={20} height={20} />, path: '/dashboard' },
  { name: 'Project', icon: <FatrowsIcon width={20} height={20} />, path: '#' },
  { name: 'Project History', icon: <HistoryIcon width={20} height={20} />, path: '/history' },
  { name: 'Notification', icon: <NotificationIcon width={20} height={20} />, path: '#' },
  { name: 'Calendars', icon: <CalendarIcon width={20} height={20} />, path: '#' },
]

const OTHER_MENU_ITEMS: MenuItemProps[] = [
  { name: 'Support', icon: <HeadphoneIcon width={20} height={20} />, path: '#' },
  { name: 'Help Center', icon: <LikeIcon width={20} height={20} />, path: '#' },
]

const MenuButton = ({ item, isActive, onClick }: { item: MenuItemProps; isActive?: boolean; onClick?: () => void }) => (
  <button
    className={cn(
      'flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-start text-sub-600 hover:text-strong-950',
      {
        'border-2 border-white text-strong-950 outline-1 outline-[#5E57E480]': isActive,
      },
    )}
    onClick={onClick}
  >
    <div className={cn({ 'text-primary-base': isActive })}>{item.icon}</div>
    <span className='text-sm'>{item.name}</span>
  </button>
)

const Sidebar = ({ activeMenu }: { activeMenu: string }) => {
  const navigate = useNavigate()
  return (
    <aside className='flex h-dvh w-full flex-col gap-5 bg-weak-50'>
      <div className='border-b border-soft-100 p-5'>
        <img src={logoImage} alt='Logo' width={63} height={24} className='h-6 w-auto' fetchPriority='high' />
      </div>
      <div className='flex flex-col gap-5 px-2'>
        <button className='hover:bg-weak-100 flex items-center gap-3 rounded-xl border border-soft-100 bg-white px-4 py-3'>
          <div className='flex size-8 items-center justify-center rounded-full bg-soft-100 text-sm text-strong-950'>
            M
          </div>
          <span className='flex-grow text-sm text-surface-800'>Marketing Team's</span>
          <CaretDoubleVertical width={20} height={20} />
        </button>
      </div>
      <nav className='flex flex-col gap-2 px-2'>
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuButton
            key={item.name}
            item={item}
            isActive={item.path === activeMenu}
            onClick={() => navigate(item.path)}
          />
        ))}
      </nav>
      <hr className='border-t border-soft-100' />
      <nav className='flex flex-col gap-2 px-2'>
        {OTHER_MENU_ITEMS.map((item) => (
          <MenuButton
            key={item.name}
            item={item}
            isActive={item.path === activeMenu}
            onClick={() => navigate(item.path)}
          />
        ))}
      </nav>
    </aside>
  )
}

export default memo(Sidebar)
