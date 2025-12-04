'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function SubwayPhilosophy() {
  return (
    <section className="py-20 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-primaryblue text-white px-6 py-3 rounded-[4px]">
            <div className="w-8 h-8 bg-white text-primaryblue rounded-full flex items-center justify-center font-black">R</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Route Rules</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophy.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-primaryblue rounded-[10px] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primaryblue text-white rounded-full flex items-center justify-center font-black text-sm">{item.number}</div>
                <h3 className="text-xl font-black text-primaryblue">{item.title}</h3>
              </div>
              <p className="text-sm text-primaryblue/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
