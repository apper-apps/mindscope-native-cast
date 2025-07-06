import React from 'react'
import { cn } from '@/utils/cn'

const TimeSlot = ({ time, isSelected, isAvailable, onClick }) => {
  const handleClick = () => {
    if (isAvailable) {
      onClick(time)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "time-slot",
        {
          "selected": isSelected,
          "unavailable": !isAvailable
        }
      )}
      disabled={!isAvailable}
    >
      {time}
    </button>
  )
}

export default TimeSlot