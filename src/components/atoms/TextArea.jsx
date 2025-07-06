import React from 'react'
import { cn } from '@/utils/cn'

const TextArea = React.forwardRef(({ 
  className, 
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "form-textarea",
        className
      )}
      {...props}
    />
  )
})

TextArea.displayName = "TextArea"

export default TextArea