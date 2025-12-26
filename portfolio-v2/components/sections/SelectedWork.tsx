'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { Project } from '@/lib/types'

interface SelectedWorkProps {
  onProjectSelect: (project: Project) => void
}

export default function SelectedWork({ onProjectSelect }: SelectedWorkProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Building products that matter for millions across the World
        </motion.p>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onClick={() => onProjectSelect(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
          
          {/* Bottom border */}
          <div className="border-t-2 border-gray-200" />
        </div>
      </div>
    </section>
  )
}
