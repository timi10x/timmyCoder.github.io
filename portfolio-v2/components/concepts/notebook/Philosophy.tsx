'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function NotebookPhilosophy() {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute inset-0 opacity-10">{Array.from({ length: 100 }).map((_, i) => (<div key={i} className="h-8 border-b border-primaryblue" />))}</div>
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-5xl font-black text-primaryblue mb-12">
          My principles
        </motion.h2>

        <div className="space-y-6">
          {philosophy.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-4">
              <div className="w-8 h-8 flex-shrink-0 bg-primaryblue text-white rounded-full flex items-center justify-center font-bold text-sm">{item.number}</div>
              <div>
                <h3 className="text-xl font-black text-primaryblue mb-2">{item.title}</h3>
                <p className="text-primaryblue/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
