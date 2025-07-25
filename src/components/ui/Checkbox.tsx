import { forwardRef } from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, className, ...props }, ref) => {
  return (
    <label className={`group inline-flex cursor-pointer items-center gap-3 ${className}`}>
      <div className='relative size-5'>
        <input
          type='checkbox'
          ref={ref}
          className={`peer size-full appearance-none rounded-md border-2 border-soft-100 bg-white transition-colors duration-200 outline-none checked:border-primary-base`}
          {...props}
        />
        {/* <div className='pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100'>
          ✔
        </div> */}
      </div>
      {label && <span className='text-xs text-strong-950 md:text-sm'>{label}</span>}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
