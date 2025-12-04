'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function SubwayTestimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-primaryblue text-white px-6 py-3 rounded-[4px]">
            <div className="w-8 h-8 bg-white text-primaryblue rounded-full flex items-center justify-center font-black">T</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Passenger Reviews</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primaryblue text-white rounded-full flex items-center justify-center font-black">{t.avatar}</div>
                <div>
                  <div className="font-bold text-primaryblue">{t.name}</div>
                  <div className="text-xs text-primaryblue/60">{t.role}</div>
                </div>
              </div>
              <p className="text-sm text-primaryblue/80">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
