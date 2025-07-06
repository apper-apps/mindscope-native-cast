import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Empty = ({ message, actionText, actionLink }) => {
  return (
    <div className="py-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Search" className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-display font-bold text-primary mb-4">
            Nothing to see here
          </h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {message || "We couldn't find any content to display right now."}
          </p>
          
          {actionText && actionLink && (
            <Button variant="primary" asChild>
              <Link to={actionLink}>
                <ApperIcon name="ArrowLeft" className="w-5 h-5 mr-2" />
                {actionText}
              </Link>
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Empty