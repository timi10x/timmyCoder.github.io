'use client'

import { motion } from 'framer-motion'
import { skillCategories, toolsAndSpecialties } from '@/data/skills'

export default function TechnicalExpertise() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A decade of building at scale
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Primary Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Primary Stack</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={category.title} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl font-bold text-gray-900">{category.title}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{category.yearsExperience}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.skills.join(' • ')}
                  </p>
                  <motion.div 
                    className="h-[1px] bg-gray-200 mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Tools & Specialties */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Tools & Specialties</h3>
            
            {/* Skill Categories as minimal lists */}
            <div className="space-y-8">
              {toolsAndSpecialties.map((specialty, categoryIndex) => (
                <div key={specialty.category}>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {specialty.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {specialty.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors cursor-default"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
