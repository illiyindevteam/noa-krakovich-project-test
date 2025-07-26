import { cn } from '@/helpers/utils/cn'
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'primary-filled' | 'neutral-stroke'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, leftIcon, rightIcon, size, variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex h-fit cursor-pointer items-center justify-center gap-1 transition-all duration-500 ease-in-out disabled:cursor-not-allowed',
          {
            'rounded-xl p-[14px] text-xs font-medium md:text-sm [&>div]:size-4 md:[&>div]:size-5': size === 'lg',
            'rounded-[10px] p-[10px] text-xs font-medium md:text-sm [&>div]:size-4 md:[&>div]:size-5': size === 'md',
            'rounded-lg p-[8px] text-xs font-medium md:text-sm [&>div]:size-4 md:[&>div]:size-5': size === 'sm',
            'rounded-lg p-[6px] text-xs font-medium [&>div]:size-[14px] md:[&>div]:size-4': size === 'xs',
            'bg-primary-base text-white hover:bg-primary-darker focus:outline-soft-100 focus:outline-double disabled:bg-weak-50 disabled:text-soft-400':
              variant === 'primary-filled',
            'border border-soft-100 bg-white text-sub-600 hover:bg-weak-50 hover:text-strong-950 focus:border-strong-950 focus:text-strong-950 focus:outline-soft-100 focus:outline-double disabled:bg-weak-50 disabled:text-soft-400':
              variant === 'neutral-stroke',
          },
          className,
        )}
        {...props}
      >
        {leftIcon && <div>{leftIcon}</div>}
        {text && <span>{text}</span>}
        {rightIcon && <div>{rightIcon}</div>}
      </button>
    )
  },
)

export default Button
