import React from 'react'
import HeroSection from '@/components/organisms/HeroSection'
import ServicesSection from '@/components/organisms/ServicesSection'
import PackagesSection from '@/components/organisms/PackagesSection'
import TestimonialsSection from '@/components/organisms/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home