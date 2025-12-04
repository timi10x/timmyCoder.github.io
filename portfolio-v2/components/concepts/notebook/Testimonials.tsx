'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function NotebookTestimonials() {
  return (
    <section className="py-20 px-6 bg-primaryivory relative">
      <div className="absolute inset-0 opacity-10">{Array.from({ length: 50 }).map((_, i) => (<div key={i} className="h-8 border-b border-primaryblue" />))}</div>
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-5xl font-black text-primaryblue mb-12">
          What people say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, rotate: -2 }} whileInView={{ opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-pink-50 border-2 border-pink-200 rounded-[4px] p-6 shadow-sm relative transform hover:rotate-1 transition-transform">
              <div className="text-4xl text-primaryblue/20 mb-2">"</div>
              <p className="text-sm text-primaryblue/90 italic mb-4">{t.text}</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primaryblue text-white rounded-full flex items-center justify-center text-xs font-bold">{t.avatar}</div>
                <div>
                  <div className="font-bold text-primaryblue text-sm">{t.name}</div>
                  <div className="text-xs text-primaryblue/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
