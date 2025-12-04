'use client'

import { contact } from '@/data/portfolio'

export default function TerminalContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 font-mono">
          <p className="text-primaryblue/60 mb-2">$ nano contact.sh</p>
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue">
            Get in Touch
          </h2>
        </div>

        {/* Terminal-style Contact Form */}
        <div className="bg-white border-2 border-primaryblue rounded-[10px] overflow-hidden shadow-xl">
          {/* Terminal Header */}
          <div className="bg-primaryblue text-white px-6 py-3 flex items-center gap-2 font-mono">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
            <div className="ml-4 text-sm">contact.sh</div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <p className="text-primaryblue/60 mb-6">
              $ ./contact.sh --help
            </p>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div>
                <p className="text-primaryblue/60 text-sm mb-2">
                  $ echo $EMAIL
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xl text-primaryblue font-bold hover:underline flex items-center gap-2"
                >
                  📧 {contact.email}
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-primaryblue/60 text-sm mb-3">
                  $ cat social_links.txt
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-primaryblue">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primaryblue hover:underline"
                  >
                    💼 linkedin.com/in/timi10x
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primaryblue hover:underline"
                  >
                    💻 github.com/timmyCoder
                  </a>
                  <a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primaryblue hover:underline"
                  >
                    🐦 twitter.com/timi10x
                  </a>
                  <a
                    href={contact.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primaryblue hover:underline"
                  >
                    📝 medium.com/@timi10x
                  </a>
                </div>
              </div>

              {/* Available for */}
              <div>
                <p className="text-primaryblue/60 text-sm mb-3">
                  $ cat availability.txt
                </p>
                <div className="bg-primaryivory border border-primaryblue rounded-[4px] p-4">
                  <p className="text-primaryblue/90">
                    ✓ Full-time opportunities<br />
                    ✓ Consulting projects<br />
                    ✓ Technical mentorship<br />
                    ✓ Speaking engagements
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <p className="text-primaryblue/60 text-sm mb-3">
                $ ./send_message.sh
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block px-10 py-4 bg-primaryblue text-white font-bold rounded-[4px] hover:bg-primaryblue/90 transition-colors"
              >
                Execute: Start Conversation
              </a>
            </div>

            <p className="text-primaryblue/40 text-sm">
              $ # Response time: Usually within 24 hours
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-primaryblue/60 font-mono text-sm">
          <p>$ echo "© 2025 timi10x | Built with Next.js & TypeScript"</p>
        </div>
      </div>
    </section>
  )
}
