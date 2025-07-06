import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PackageCard from '@/components/molecules/PackageCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getPackages } from '@/services/api/packageService'

const Packages = () => {
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

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadPackages} />
  if (packages.length === 0) return <Empty message="No packages available" actionText="Go Home" actionLink="/" />

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Coaching Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to transform your mindset and help you achieve 
            lasting success in all areas of your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PackageCard
                package={pkg}
                featured={index === 1}
                onSelectClick={handleSelectClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages