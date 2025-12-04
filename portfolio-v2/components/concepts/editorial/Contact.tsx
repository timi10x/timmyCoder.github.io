'use client'

import { contact } from '@/data/portfolio'

export default function EditorialContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="border-b-4 border-primaryblue pb-4 mb-12">
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue text-center" style={{ letterSpacing: '-0.02em' }}>
            CONTACT
          </h2>
          <div className="text-center mt-2">
            <p className="text-xs text-primaryblue/60 uppercase tracking-widest">
              Let's Build Something Exceptional Together
            </p>
          </div>
        </div>

        {/* Business Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Main Contact */}
          <div className="bg-primaryblue text-white border-4 border-primaryblue p-10">
            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest opacity-80 mb-3">
                Direct Contact
              </div>
              <div className="text-5xl font-black mb-4" style={{ letterSpacing: '-0.02em' }}>
                timi10x
              </div>
              <div className="text-lg opacity-90 uppercase tracking-wide">
                Mobile Engineer
              </div>
            </div>

            <div className="space-y-4 border-t-2 border-white/30 pt-6">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-lg hover:underline group"
              >
                <span className="text-2xl">📧</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  {contact.email}
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="bg-primaryivory border-4 border-primaryblue p-10">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-primaryblue/60 mb-3">
                Connect Online
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primaryblue hover:translate-x-2 transition-transform group"
              >
                <div className="w-10 h-10 bg-primaryblue text-white flex items-center justify-center font-bold text-xl">
                  💼
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">LinkedIn</div>
                  <div className="text-xs text-primaryblue/60 group-hover:underline">
                    Professional Network
                  </div>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primaryblue hover:translate-x-2 transition-transform group"
              >
                <div className="w-10 h-10 bg-primaryblue text-white flex items-center justify-center font-bold text-xl">
                  💻
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">GitHub</div>
                  <div className="text-xs text-primaryblue/60 group-hover:underline">
                    Open Source Work
                  </div>
                </div>
              </a>

              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primaryblue hover:translate-x-2 transition-transform group"
              >
                <div className="w-10 h-10 bg-primaryblue text-white flex items-center justify-center font-bold text-xl">
                  🐦
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">Twitter</div>
                  <div className="text-xs text-primaryblue/60 group-hover:underline">
                    Tech Insights
                  </div>
                </div>
              </a>

              <a
                href={contact.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primaryblue hover:translate-x-2 transition-transform group"
              >
                <div className="w-10 h-10 bg-primaryblue text-white flex items-center justify-center font-bold text-xl">
                  📝
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">Medium</div>
                  <div className="text-xs text-primaryblue/60 group-hover:underline">
                    Technical Writing
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primaryblue text-white border-4 border-primaryblue p-12 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Open to New Opportunities
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            I'm currently available for full-time roles, consulting projects, and technical advisory positions in fintech and mobile engineering.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block px-12 py-5 bg-white text-primaryblue font-black text-lg uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Start a Conversation
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-4 border-primaryblue text-center">
          <p className="text-xs text-primaryblue/60 uppercase tracking-widest">
            © 2025 timi10x • Crafted with Next.js & TypeScript • Mobile-First Design
          </p>
        </div>
      </div>
    </section>
  )
}
