import React from 'react'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center">
                <ApperIcon name="Brain" className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-display font-bold">
                  MindScope Pro
                </div>
                <div className="text-sm text-gray-300">
                  Dr. Saifur Rahman
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional counselling psychology services helping individuals achieve 
              mental wellness and personal growth through evidence-based therapeutic approaches.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <ApperIcon name="Facebook" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Dr. Rahman
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-white transition-colors">
                  Coaching Packages
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ApperIcon name="Mail" className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">dr.saifur@mindscopepro.co.uk</span>
              </li>
              <li className="flex items-start">
                <ApperIcon name="Phone" className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex items-start">
                <ApperIcon name="MapPin" className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">London, United Kingdom</span>
              </li>
              <li className="flex items-start">
                <ApperIcon name="Clock" className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 MindScope Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer