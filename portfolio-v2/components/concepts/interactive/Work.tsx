'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { useState } from 'react'

export default function InteractiveWork() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-primaryblue mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: any
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-8 cursor-pointer relative overflow-hidden"
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{
            x: isExpanded ? [-200, 400] : 0,
            opacity: isExpanded ? [0, 0.3, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isExpanded ? Infinity : 0,
            repeatDelay: 2,
          }}
        />

        {/* Icon */}
        <div className="text-6xl mb-4">
          {index === 0 && '📈'}
          {index === 1 && '💼'}
          {index === 2 && '🌾'}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-black text-primaryblue mb-2">
          {project.title}
        </h3>

        {/* Role */}
        <p className="text-sm text-primaryblue/60 mb-4 uppercase tracking-wide">
          {project.role}
        </p>

        {/* Description */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <p className="text-primaryblue/80 mb-4">{project.description}</p>

          {/* Impact Badge */}
          <div className="bg-primaryblue text-white px-4 py-2 rounded-[4px] inline-block font-bold mb-4">
            {project.impact}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white border border-primaryblue text-primaryblue text-xs rounded-[4px]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Expand Indicator */}
        <motion.div
          className="absolute top-4 right-4 text-2xl"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          ⬇️
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
