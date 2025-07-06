import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need to Work on Your Mindset",
      excerpt: "Discover the key indicators that suggest it's time to invest in your mental wellness and personal growth.",
      author: "Dr. Saifur Rahman",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Mindset",
      image: "mindset-signs"
    },
    {
      id: 2,
      title: "The Science Behind Success Mindset",
      excerpt: "Understanding the psychological principles that drive success and how to cultivate them in your daily life.",
      author: "Dr. Saifur Rahman",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Success",
      image: "success-science"
    },
    {
      id: 3,
      title: "Overcoming Limiting Beliefs",
      excerpt: "Learn how to identify and overcome the limiting beliefs that are holding you back from reaching your potential.",
      author: "Dr. Saifur Rahman",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Personal Growth",
      image: "limiting-beliefs"
    },
    {
      id: 4,
      title: "Building Resilience in Challenging Times",
      excerpt: "Practical strategies for developing mental resilience and bouncing back stronger from life's setbacks.",
      author: "Dr. Saifur Rahman",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Resilience",
      image: "resilience"
    },
    {
      id: 5,
      title: "The Power of Positive Psychology",
      excerpt: "Exploring how positive psychology can transform your life and improve your overall well-being.",
      author: "Dr. Saifur Rahman",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Psychology",
      image: "positive-psychology"
    },
    {
      id: 6,
      title: "Goal Setting That Actually Works",
      excerpt: "Evidence-based strategies for setting and achieving goals that align with your values and aspirations.",
      author: "Dr. Saifur Rahman",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Goal Setting",
      image: "goal-setting"
    }
  ]

  const categories = ["All", "Mindset", "Success", "Personal Growth", "Resilience", "Psychology", "Goal Setting"]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Psychology & Mindset Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and evidence-based techniques for personal growth and mental wellness
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-card overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <ApperIcon name="BookOpen" className="w-24 h-24 text-white" />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="ml-3 text-sm text-gray-500">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button variant="primary" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center">
                <ApperIcon name="FileText" className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white text-center mt-16"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive weekly psychology tips and mindset strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button variant="secondary" size="md">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog