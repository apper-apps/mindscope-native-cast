import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const PackageCard = ({ package: pkg, featured = false, onSelectClick }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className={`package-card shadow-card ${featured ? 'featured' : ''}`}
    >
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-display font-bold text-primary mb-2">
            {pkg.name}
          </h3>
          <div className="text-4xl font-bold text-primary mb-2">
            £{pkg.price}
          </div>
          <p className="text-gray-600">{pkg.sessions} sessions included</p>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="text-center">
            <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <ApperIcon name="Check" className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-primary mb-3">Expected Outcomes:</h4>
            <ul className="space-y-2">
              {pkg.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center text-sm">
                  <ApperIcon name="Target" className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button
          variant={featured ? 'secondary' : 'primary'}
          className="w-full"
          onClick={() => onSelectClick(pkg)}
        >
          Select Package
        </Button>
      </div>
    </motion.div>
  )
}

export default PackageCard