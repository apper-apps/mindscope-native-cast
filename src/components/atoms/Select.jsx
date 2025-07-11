import React from 'react'
import { cn } from '@/utils/cn'

const Select = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "form-select",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = "Select"

export default Select