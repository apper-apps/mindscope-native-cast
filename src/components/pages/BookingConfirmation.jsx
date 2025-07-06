import React from 'react'
import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const BookingConfirmation = () => {
  const location = useLocation()
  const { booking, service } = location.state || {}

  if (!booking || !service) {
    return (
      <div className="py-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ApperIcon name="AlertCircle" className="w-16 h-16 text-error mx-auto mb-4" />
          <h1 className="text-2xl font-display font-bold text-primary mb-4">
            Booking Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't find your booking details. Please try booking again.
          </p>
          <Button variant="primary" asChild>
            <Link to="/book-consultation">Book Again</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="CheckCircle" className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Your consultation has been successfully booked. We look forward to meeting you!
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">
            Booking Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Service Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ApperIcon name="Calendar" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">{service.name}</div>
                    <div className="text-sm text-gray-600">{service.duration} minutes</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Clock" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">{booking.date}</div>
                    <div className="text-sm text-gray-600">{booking.time}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="DollarSign" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">
                      {service.price === 0 ? 'FREE' : `£${service.price}`}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.price === 0 ? 'Complimentary consultation' : 'Payment due at session'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ApperIcon name="User" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">{booking.clientName}</div>
                    <div className="text-sm text-gray-600">Client</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Mail" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">{booking.clientEmail}</div>
                    <div className="text-sm text-gray-600">Email address</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Phone" className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold">{booking.clientPhone}</div>
                    <div className="text-sm text-gray-600">Phone number</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-background rounded-xl">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Booking Reference
            </h3>
            <div className="text-2xl font-mono font-bold text-secondary">
              #{booking.Id.toString().padStart(6, '0')}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Please keep this reference number for your records
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ApperIcon name="Mail" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Confirmation Email</h3>
              <p className="text-sm opacity-90">
                You'll receive a confirmation email with all the details
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ApperIcon name="Calendar" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Calendar Reminder</h3>
              <p className="text-sm opacity-90">
                Add the appointment to your calendar with the provided link
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ApperIcon name="MessageSquare" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Session Preparation</h3>
              <p className="text-sm opacity-90">
                We'll send you a brief questionnaire to help prepare for your session
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" asChild>
              <Link to="/">
                <ApperIcon name="Home" className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/book-consultation">
                <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
                Book Another Session
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-center">
              Have questions about your booking? Contact us at{' '}
              <a href="mailto:dr.saifur@mindscopepro.co.uk" className="text-primary font-semibold">
                dr.saifur@mindscopepro.co.uk
              </a>{' '}
              or call{' '}
              <a href="tel:+442012345678" className="text-primary font-semibold">
                +44 (0) 20 1234 5678
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmation