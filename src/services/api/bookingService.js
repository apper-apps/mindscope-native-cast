import bookingsData from '@/services/mockData/bookings.json'
import timeSlotsData from '@/services/mockData/timeSlots.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getBookings = async () => {
  await delay(300)
  return [...bookingsData]
}

export const getBookingById = async (id) => {
  await delay(200)
  const booking = bookingsData.find(b => b.Id === parseInt(id))
  if (!booking) {
    throw new Error('Booking not found')
  }
  return { ...booking }
}

export const createBooking = async (bookingData) => {
  await delay(500)
  const maxId = Math.max(...bookingsData.map(b => b.Id), 0)
  const newBooking = {
    ...bookingData,
    Id: maxId + 1
  }
  bookingsData.push(newBooking)
  return { ...newBooking }
}

export const updateBooking = async (id, bookingData) => {
  await delay(400)
  const index = bookingsData.findIndex(b => b.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Booking not found')
  }
  bookingsData[index] = { ...bookingsData[index], ...bookingData }
  return { ...bookingsData[index] }
}

export const deleteBooking = async (id) => {
  await delay(300)
  const index = bookingsData.findIndex(b => b.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Booking not found')
  }
  bookingsData.splice(index, 1)
  return { success: true }
}

export const getAvailableSlots = async (date, serviceType) => {
  await delay(400)
  const dateStr = date.toISOString().split('T')[0]
  const slots = timeSlotsData.filter(slot => 
    slot.date === dateStr && slot.serviceType === serviceType
  )
  return [...slots]
}