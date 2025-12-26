'use client'

import { useState } from 'react'
import Background from '@/components/layout/Background'
import Hero from '@/components/sections/Hero'
import SelectedWork from '@/components/sections/SelectedWork'
import TestimonialsFeatured from '@/components/sections/TestimonialsFeatured'
import TechnicalExpertise from '@/components/sections/TechnicalExpertise'
import Footer from '@/components/sections/Footer'
import ProjectModal from '@/components/ui/ProjectModal'
import { Project } from '@/lib/types'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Background />
      
      <div className="relative z-10">
        <Hero />
        <SelectedWork onProjectSelect={setSelectedProject} />
        <TestimonialsFeatured />
        <TechnicalExpertise />
        <Footer />
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  )
}