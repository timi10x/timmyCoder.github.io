'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function NotebookContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primaryivory relative">
      <div className="absolute inset-0 opacity-10">{Array.from({ length: 50 }).map((_, i) => (<div key={i} className="h-8 border-b border-primaryblue" />))}</div>
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400/20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-5xl font-black text-primaryblue mb-12">
          Let's connect!
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-blue-50 border-2 border-blue-300 rounded-[4px] p-8 mb-8">
          <p className="text-lg text-primaryblue/80 mb-6">I'm always open to new opportunities and collaborations. Drop me a line!</p>
          
          <div className="space-y-3 mb-6">
            {[
              { icon: '📧', label: 'Email', value: contact.email, url: `mailto:${contact.email}` },
              { icon: '💼', label: 'LinkedIn', value: '/in/timi10x', url: contact.linkedin },
              { icon: '💻', label: 'GitHub', value: '@timmyCoder', url: contact.github },
              { icon: '🐦', label: 'Twitter', value: '@timi10x', url: contact.twitter }
            ].map((item) => (
              <a key={item.label} href={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-primaryblue hover:underline">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold">{item.label}:</span>
                <span>{item.value}</span>
              </a>
            ))}
          </div>

          <a href={`mailto:${contact.email}`} className="inline-block bg-primaryblue text-white px-8 py-3 rounded-[4px] font-bold hover:scale-105 transition-transform">
            Send me a message →
          </a>
        </motion.div>

        <div className="text-center text-sm text-primaryblue/60">
          © 2025 timi10x • Made with ❤️
        </div>
      </div>
    </section>
  )
}
