import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <ApperIcon 
        key={i} 
        name="Star" 
        className={`w-4 h-4 ${i < rating ? 'text-warning fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="testimonial-card shadow-card"
    >
      <div className="pt-8">
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          {testimonial.content}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-primary mb-1">
              {testimonial.clientName}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.serviceType}
            </div>
          </div>
          
          <div className="stars">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard