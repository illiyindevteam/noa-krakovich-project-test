import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  onClick?: () => void
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ leftIcon, ...props }, ref) => {
  return (
    <div className='flex h-[38px] w-full items-center gap-8 rounded-[10px] border border-soft-100 md:h-[42px]'>
      {leftIcon && <div className='size-5'>{leftIcon}</div>}
      <input
        ref={ref}
        className='h-full w-full bg-transparent px-4 text-sm text-strong-950 outline-none placeholder:text-soft-400'
        {...props}
      />
    </div>
  )
})

InputText.displayName = 'InputText'

export default InputText
