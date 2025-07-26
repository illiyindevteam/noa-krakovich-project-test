import { cn } from '@/helpers/utils/cn'
import { forwardRef, type ReactNode } from 'react'

interface FormFieldProps {
  children: ReactNode
  label: string
  htmlFor?: string
  isRequired?: boolean
  className?: string
}

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ children, htmlFor, isRequired, label, className }, ref) => {
    return (
      <div className={cn('flex w-full flex-col gap-0 md:gap-1', className)} ref={ref}>
        <div className='flex gap-[1px]'>
          <label className='text-xs font-medium md:text-sm' htmlFor={htmlFor}>
            {label}
          </label>
          {isRequired && <p className='text-primary-base'>&#42;</p>}
        </div>
        {children}
      </div>
    )
  },
)

FormField.displayName = 'FormField'

export default FormField
