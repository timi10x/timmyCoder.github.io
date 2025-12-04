'use client'

import { contact } from '@/data/portfolio'

export default function SplitContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-16 text-center">
          Get In Touch
        </h2>

        {/* Centered Card with Floating Actions */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-primaryblue rounded-[10px] p-12 mb-8 text-center">
            <p className="text-2xl text-primaryblue/80 mb-8 leading-relaxed">
              I'm always excited to collaborate on innovative fintech projects or discuss new opportunities. Let's build something amazing together.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="inline-block px-12 py-5 bg-primaryblue text-white font-black text-xl rounded-[4px] hover:scale-110 transition-transform duration-200 mb-8"
            >
              {contact.email}
            </a>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primaryivory border-2 border-primaryblue rounded-[4px] hover:bg-primaryblue hover:text-white transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">💼</div>
                <div className="text-sm font-bold text-primaryblue group-hover:text-white">
                  LinkedIn
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primaryivory border-2 border-primaryblue rounded-[4px] hover:bg-primaryblue hover:text-white transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">💻</div>
                <div className="text-sm font-bold text-primaryblue group-hover:text-white">
                  GitHub
                </div>
              </a>

              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primaryivory border-2 border-primaryblue rounded-[4px] hover:bg-primaryblue hover:text-white transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">🐦</div>
                <div className="text-sm font-bold text-primaryblue group-hover:text-white">
                  Twitter
                </div>
              </a>

              <a
                href={contact.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primaryivory border-2 border-primaryblue rounded-[4px] hover:bg-primaryblue hover:text-white transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">📝</div>
                <div className="text-sm font-bold text-primaryblue group-hover:text-white">
                  Medium
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-primaryblue/60">
            <p>© 2025 timi10x. Crafted with Next.js, TypeScript & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
