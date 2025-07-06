import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import NavigationMenu from '@/components/molecules/NavigationMenu'
import Button from '@/components/atoms/Button'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/packages', label: 'Packages' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <ApperIcon name="Brain" className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-display font-bold text-primary">
                MindScope Pro
              </div>
              <div className="text-xs text-gray-500">
                Dr. Saifur Rahman
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu items={navItems} className="space-x-6" />
            <Button variant="secondary" size="sm" asChild>
              <Link to="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6 text-primary" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <NavigationMenu 
              items={navItems} 
              className="flex-col space-y-2" 
              onItemClick={closeMobileMenu}
            />
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button variant="secondary" size="sm" className="w-full" asChild>
                <Link to="/book-consultation" onClick={closeMobileMenu}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header