'use client'

import { contact } from '@/data/portfolio'

export default function BentoContact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-12">
          Let's Connect
        </h2>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <a
            href={`mailto:${contact.email}`}
            className="bg-primaryblue text-white border-2 border-primaryblue rounded-[10px] p-10 hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-5xl mb-4">📧</div>
            <div className="text-2xl font-black mb-2">Email</div>
            <div className="text-lg opacity-90 group-hover:underline">
              {contact.email}
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-10 hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-5xl mb-4">💼</div>
            <div className="text-2xl font-black text-primaryblue mb-2">LinkedIn</div>
            <div className="text-lg text-primaryblue/70 group-hover:underline">
              View Profile →
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-primaryblue rounded-[10px] p-10 hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-5xl mb-4">💻</div>
            <div className="text-2xl font-black text-primaryblue mb-2">GitHub</div>
            <div className="text-lg text-primaryblue/70 group-hover:underline">
              Check Code →
            </div>
          </a>

          {/* Twitter Card */}
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-primaryblue rounded-[10px] p-10 hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-5xl mb-4">🐦</div>
            <div className="text-2xl font-black text-primaryblue mb-2">Twitter</div>
            <div className="text-lg text-primaryblue/70 group-hover:underline">
              Follow Updates →
            </div>
          </a>
        </div>

        {/* CTA Card */}
        <div className="bg-primaryblue text-white border-2 border-primaryblue rounded-[10px] p-12 text-center">
          <h3 className="text-4xl font-black mb-4">
            Ready to Build Something Great?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block px-10 py-5 bg-white text-primaryblue font-black text-lg rounded-[4px] hover:scale-110 transition-transform duration-200"
          >
            Start a Conversation
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-primaryblue/60">
          <p>© 2025 timi10x. Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </section>
  )
}
