import React, { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isBefore, startOfDay } from 'date-fns'
import { motion } from 'framer-motion'
import CalendarDay from '@/components/molecules/CalendarDay'
import TimeSlot from '@/components/molecules/TimeSlot'
import ApperIcon from '@/components/ApperIcon'
import { getAvailableSlots } from '@/services/api/bookingService'

const BookingCalendar = ({ selectedDate, selectedTime, onDateSelect, onTimeSelect, serviceType }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [availableSlots, setAvailableSlots] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedDate) {
      loadAvailableSlots()
    }
  }, [selectedDate, serviceType])

  const loadAvailableSlots = async () => {
    if (!selectedDate) return
    
    try {
      setLoading(true)
      const slots = await getAvailableSlots(selectedDate, serviceType)
      setAvailableSlots(slots)
    } catch (err) {
      console.error('Failed to load available slots:', err)
    } finally {
      setLoading(false)
    }
  }

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const isDateAvailable = (date) => {
    return !isBefore(date, startOfDay(new Date()))
  }

  const isTimeAvailable = (time) => {
    if (!selectedDate) return false
    const dateStr = format(selectedDate, 'yyyy-MM-dd')
    return availableSlots.some(slot => 
      slot.date === dateStr && 
      slot.time === time && 
      slot.available
    )
  }

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() + direction)
    setCurrentMonth(newMonth)
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-display font-bold text-primary">
              Select Date
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ApperIcon name="ChevronLeft" className="w-5 h-5 text-gray-600" />
              </button>
              <div className="text-lg font-semibold text-primary min-w-[120px] text-center">
                {format(currentMonth, 'MMMM yyyy')}
              </div>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ApperIcon name="ChevronRight" className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-grid">
            {daysInMonth.map((date) => (
              <CalendarDay
                key={date.toString()}
                date={date}
                isSelected={selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')}
                isAvailable={isDateAvailable(date)}
                onClick={onDateSelect}
              />
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-display font-bold text-primary">
              Select Time
            </h3>
            {selectedDate && (
              <div className="text-sm text-gray-600">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </div>
            )}
          </div>

          {!selectedDate ? (
            <div className="text-center py-12">
              <ApperIcon name="Calendar" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Please select a date first</p>
            </div>
          ) : loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-500">Loading available times...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <TimeSlot
                  key={time}
                  time={time}
                  isSelected={selectedTime === time}
                  isAvailable={isTimeAvailable(time)}
                  onClick={onTimeSelect}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar