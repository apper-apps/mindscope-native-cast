import React from 'react'
import Label from '@/components/atoms/Label'
import Input from '@/components/atoms/Input'
import TextArea from '@/components/atoms/TextArea'
import Select from '@/components/atoms/Select'
import { cn } from '@/utils/cn'

const FormField = ({ 
  label, 
  type = 'text', 
  error, 
  className, 
  children,
  ...props 
}) => {
  const renderInput = () => {
    if (type === 'textarea') {
      return <TextArea {...props} />
    }
    
    if (type === 'select') {
      return (
        <Select {...props}>
          {children}
        </Select>
      )
    }
    
    return <Input type={type} {...props} />
  }

  return (
    <div className={cn("form-group", className)}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      {renderInput()}
      {error && (
        <p className="text-error text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default FormField