'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function SubwayContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-primaryblue text-white px-6 py-3 rounded-[4px]">
            <div className="w-8 h-8 bg-white text-primaryblue rounded-full flex items-center justify-center font-black">C</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Final Destination</h2>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-12 text-center mb-8">
          <h3 className="text-3xl font-black text-primaryblue mb-4">Ready to Board?</h3>
          <p className="text-lg text-primaryblue/80 mb-8">Next stop: Your amazing project</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '📧', label: 'Email', url: `mailto:${contact.email}` },
              { icon: '💼', label: 'LinkedIn', url: contact.linkedin },
              { icon: '💻', label: 'GitHub', url: contact.github },
              { icon: '🐦', label: 'Twitter', url: contact.twitter }
            ].map((item) => (
              <a key={item.label} href={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="bg-white border-2 border-primaryblue rounded-[10px] p-6 hover:bg-primaryblue hover:text-white transition-colors group">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm font-bold text-primaryblue group-hover:text-white">{item.label}</div>
              </a>
            ))}
          </div>

          <a href={`mailto:${contact.email}`} className="inline-block bg-primaryblue text-white px-12 py-4 rounded-[4px] font-black text-lg uppercase hover:scale-105 transition-transform">
            Purchase Ticket
          </a>
        </motion.div>

        <div className="text-center text-sm text-primaryblue/60">
          © 2025 timi10x Transit Authority • All routes operational
        </div>
      </div>
    </section>
  )
}
