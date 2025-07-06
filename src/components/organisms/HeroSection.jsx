import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
                Transform Your
                <span className="block text-secondary">Mindset</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Professional counselling psychology services by Dr. Saifur Rahman
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6">
                <div className="flex items-center">
                  <ApperIcon name="Award" className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-sm">Chartered Psychologist</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="Users" className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-sm">500+ Clients Helped</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="Clock" className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-sm">10+ Years Experience</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Specializing in mindset transformation, success coaching, and personal development. 
                Start your journey to mental wellness with a free 15-minute consultation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/book-consultation">
                  Book Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="User" className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center"
              >
                <ApperIcon name="Brain" className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center"
              >
                <ApperIcon name="Heart" className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection