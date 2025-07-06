import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Error = ({ message, onRetry }) => {
  return (
    <div className="py-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-error to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertCircle" className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-display font-bold text-primary mb-4">
            Oops! Something went wrong
          </h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {message || "We're having trouble loading the content. Please try again."}
          </p>
          
          {onRetry && (
            <Button onClick={onRetry} variant="primary">
              <ApperIcon name="RotateCcw" className="w-5 h-5 mr-2" />
              Try Again
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Error