import React from 'react'
import { format, isSameDay } from 'date-fns'
import { cn } from '@/utils/cn'

const CalendarDay = ({ date, isSelected, isAvailable, onClick }) => {
  const handleClick = () => {
    if (isAvailable) {
      onClick(date)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "calendar-day",
        {
          "selected": isSelected,
          "unavailable": !isAvailable
        }
      )}
      disabled={!isAvailable}
    >
      {format(date, 'd')}
    </button>
  )
}

export default CalendarDay