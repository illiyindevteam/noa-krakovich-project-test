import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  leftIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ text, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className='flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-primary-base p-[14px] text-center text-sm font-semibold text-white'
      {...props}
    >
      {text}
    </button>
  )
})

export default Button
