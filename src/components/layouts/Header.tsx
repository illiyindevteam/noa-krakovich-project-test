import { memo } from 'react'
import InputSearch from '../ui/InputSearch'
import SettingIcon from '@/assets/icon/setting-2.svg?react'

import TextAlignLeft from '@/assets/icon/textalign-left.svg?react'
import UserMenu from '../ui/UserMenu'

const Header = ({ onShowSidebar }: { onShowSidebar: (value: boolean) => void }) => {
  return (
    <div className='flex w-full items-center justify-between border-b border-[#E4E4E4] px-8 py-6'>
      <div className='flex flex-grow gap-3'>
        <button
          className='cursor-pointer p-[6px] text-soft-400 transition-colors hover:text-strong-950 xl:hidden'
          aria-label='Menu'
          onClick={() => onShowSidebar(true)}
        >
          <TextAlignLeft width={20} height={20} />
        </button>
        <InputSearch className='hidden w-full max-w-[400px] md:flex' showShortcut enableShortcut />
      </div>
      <div className='flex h-fit gap-4'>
        <button className='cursor-pointer p-[6px] text-soft-400' aria-label='Setting'>
          <SettingIcon width={20} height={20} />
        </button>
        <div className='h-8 border-l border-soft-400' />
        <UserMenu />
      </div>
    </div>
  )
}

export default memo(Header)
