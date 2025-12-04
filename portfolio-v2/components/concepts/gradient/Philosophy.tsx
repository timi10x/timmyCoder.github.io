'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

const iconGradients = [
  'from-red-500 to-orange-500',
  'from-yellow-500 to-green-500',
  'from-green-500 to-teal-500',
  'from-cyan-500 to-blue-500',
  'from-blue-500 to-purple-500',
  'from-purple-500 to-pink-500',
]

export default function GradientPhilosophy() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-6">
            Philosophy
          </h2>
          <p className="text-xl text-gray-600">The principles that guide my work</p>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${iconGradients[index]} p-1 h-full`}>
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                  {/* Number */}
                  <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${iconGradients[index]} mb-4`}>
                    {item.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Gradient bar */}
                  <div className={`w-full h-1 bg-gradient-to-r ${iconGradients[index]} rounded-full mt-6`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
