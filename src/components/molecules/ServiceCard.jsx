import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const ServiceCard = ({ service, onBookClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="service-card shadow-card"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center mr-4">
            <ApperIcon name="Brain" className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-1">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm">{service.duration} minutes</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">
            {service.price === 0 ? 'FREE' : `£${service.price}`}
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
          <span>{service.duration} min</span>
        </div>
        
        <Button
          variant={service.price === 0 ? 'secondary' : 'primary'}
          size="sm"
          onClick={() => onBookClick(service)}
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  )
}

export default ServiceCard