import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { Link } from 'react-router-dom'

const About = () => {
  const qualifications = [
    {
      title: "Doctorate in Counselling Psychology",
      institution: "University of London",
      year: "2012"
    },
    {
      title: "Master's in Clinical Psychology",
      institution: "Cambridge University",
      year: "2008"
    },
    {
      title: "Bachelor's in Psychology",
      institution: "Oxford University",
      year: "2006"
    }
  ]

  const specializations = [
    {
      icon: "Brain",
      title: "Cognitive Behavioral Therapy",
      description: "Evidence-based approach to help you identify and change negative thought patterns"
    },
    {
      icon: "Heart",
      title: "Mindfulness-Based Therapy",
      description: "Incorporating mindfulness practices to reduce stress and improve emotional regulation"
    },
    {
      icon: "Target",
      title: "Solution-Focused Therapy",
      description: "Goal-oriented approach focusing on solutions rather than problems"
    },
    {
      icon: "Users",
      title: "Relationship Counselling",
      description: "Helping individuals and couples build stronger, healthier relationships"
    }
  ]

  const approach = [
    {
      step: "1",
      title: "Assessment & Understanding",
      description: "We begin with a comprehensive assessment to understand your unique situation, challenges, and goals."
    },
    {
      step: "2",
      title: "Personalized Treatment Plan",
      description: "Based on your assessment, we develop a tailored treatment plan that addresses your specific needs."
    },
    {
      step: "3",
      title: "Active Therapy & Coaching",
      description: "Through regular sessions, we work together using evidence-based techniques to achieve your goals."
    },
    {
      step: "4",
      title: "Progress & Maintenance",
      description: "We monitor your progress and provide tools and strategies for maintaining long-term success."
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            About Dr. Saifur Rahman
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to helping individuals transform their lives through evidence-based psychological interventions
          </p>
        </motion.div>

        {/* Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="User" className="w-40 h-40 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <ApperIcon name="Award" className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display font-bold text-primary mb-6">
              My Journey in Psychology
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With over 10 years of experience in counselling psychology, I have dedicated my career 
                to understanding the complexities of human behavior and helping individuals overcome 
                their challenges to lead fulfilling lives.
              </p>
              <p>
                My journey began at Oxford University, where I first discovered my passion for 
                understanding the human mind. Since then, I have worked with over 500 clients, 
                helping them transform their mindsets and achieve their personal and professional goals.
              </p>
              <p>
                I believe in a collaborative approach to therapy, where we work together as partners 
                in your healing journey. My goal is to provide you with the tools and insights needed 
                to create lasting positive change in your life.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="primary" asChild>
                <Link to="/book-consultation">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Education & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="GraduationCap" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">
                  {qual.title}
                </h3>
                <p className="text-gray-600 mb-1">{qual.institution}</p>
                <p className="text-secondary font-semibold">{qual.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Areas of Specialization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card p-8 hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={spec.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-background rounded-3xl p-12"
        >
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
            My Therapeutic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About