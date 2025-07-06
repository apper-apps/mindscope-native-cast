import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import FormField from '@/components/molecules/FormField'
import BookingCalendar from '@/components/organisms/BookingCalendar'
import { getServices } from '@/services/api/serviceService'
import { createBooking } from '@/services/api/bookingService'

const BookConsultation = () => {
  const [step, setStep] = useState(1)
  const [services, setServices] = useState([])
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    loadServices()
    
    // Check if service or package was pre-selected
    if (location.state?.selectedService) {
      setSelectedService(location.state.selectedService)
      setStep(2)
    } else if (location.state?.selectedPackage) {
      // For packages, we'll use the first consultation service
      loadServices().then(() => {
        const consultationService = services.find(s => s.type === 'consultation')
        if (consultationService) {
          setSelectedService(consultationService)
          setStep(2)
        }
      })
    }
  }, [location.state])

  const loadServices = async () => {
    try {
      const data = await getServices()
      setServices(data)
    } catch (err) {
      toast.error('Failed to load services')
    }
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setStep(2)
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleClientInfoChange = (field, value) => {
    setClientInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!selectedService || !selectedDate || !selectedTime) {
      toast.error('Please complete all booking steps')
      return
    }

    if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    try {
      setLoading(true)
      
      const bookingData = {
        serviceId: selectedService.Id,
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        clientName: clientInfo.name,
        clientEmail: clientInfo.email,
        clientPhone: clientInfo.phone,
        message: clientInfo.message,
        status: 'pending'
      }

      const booking = await createBooking(bookingData)
      
      toast.success('Booking confirmed! Check your email for details.')
      navigate('/booking-confirmation', { state: { booking, service: selectedService } })
    } catch (err) {
      toast.error('Failed to create booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedService !== null
      case 2:
        return selectedDate !== null && selectedTime !== null
      case 3:
        return clientInfo.name && clientInfo.email && clientInfo.phone
      default:
        return false
    }
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Take the first step towards transforming your mindset
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                Select Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <motion.div
                    key={service.Id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      selectedService?.Id === service.Id
                        ? 'bg-primary text-white shadow-premium'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-display font-bold">
                        {service.name}
                      </h3>
                      <div className="text-xl font-bold">
                        {service.price === 0 ? 'FREE' : `£${service.price}`}
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm">
                      <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
                      <span>{service.duration} minutes</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                Choose Date & Time
              </h2>
              <BookingCalendar
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateSelect={handleDateSelect}
                onTimeSelect={handleTimeSelect}
                serviceType={selectedService?.type || 'consultation'}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                Your Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name *"
                    value={clientInfo.name}
                    onChange={(e) => handleClientInfoChange('name', e.target.value)}
                    required
                  />
                  <FormField
                    label="Email Address *"
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => handleClientInfoChange('email', e.target.value)}
                    required
                  />
                </div>
                <FormField
                  label="Phone Number *"
                  type="tel"
                  value={clientInfo.phone}
                  onChange={(e) => handleClientInfoChange('phone', e.target.value)}
                  required
                />
                <FormField
                  label="Message (Optional)"
                  type="textarea"
                  value={clientInfo.message}
                  onChange={(e) => handleClientInfoChange('message', e.target.value)}
                  placeholder="Tell us about your goals or any specific concerns..."
                />
                
                {/* Booking Summary */}
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-display font-bold text-primary mb-4">
                    Booking Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-semibold">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-semibold">
                        {selectedDate?.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{selectedService?.duration} minutes</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>
                        {selectedService?.price === 0 ? 'FREE' : `£${selectedService?.price}`}
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={goBack}
            disabled={step === 1}
          >
            <ApperIcon name="ChevronLeft" className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
            >
              Next
              <ApperIcon name="ChevronRight" className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed() || loading}
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
              <ApperIcon name="Check" className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookConsultation