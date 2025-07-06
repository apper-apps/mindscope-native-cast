import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PackageCard from '@/components/molecules/PackageCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getPackages } from '@/services/api/packageService'

const PackagesSection = () => {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadPackages()
  }, [])

  const loadPackages = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getPackages()
      setPackages(data)
    } catch (err) {
      setError('Failed to load packages. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectClick = (pkg) => {
    navigate('/book-consultation', { state: { selectedPackage: pkg } })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadPackages} />
  if (packages.length === 0) return <Empty message="No packages available" />

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Coaching Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to transform your mindset and achieve lasting success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div key={pkg.Id} variants={itemVariants}>
              <PackageCard
                package={pkg}
                featured={index === 1}
                onSelectClick={handleSelectClick}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PackagesSection