'use client'

const contacts = [
  { label: 'Email', value: 'olatoyedan@gmail.com', link: 'mailto:olatoyedan@gmail.com', icon: '📧' },
  { label: 'LinkedIn', value: 'timi-o', link: 'https://www.linkedin.com/in/timi-o/', icon: '💼' },
  { label: 'GitHub', value: 'timi10x', link: 'https://github.com/timi10x', icon: '💻' },
  { label: 'Twitter', value: '@timi10x', link: 'https://twitter.com/timi10x', icon: '🐦' },
  { label: 'Medium', value: '@timmy10x', link: 'https://medium.com/@timmy10x', icon: '📝' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-4">Let's Talk</h2>
          <p className="text-xl text-primaryblue/70 max-w-2xl mx-auto">
            Working on a fintech product? Let's discuss how to make it exceptional.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="p-6 bg-primaryivory border-2 border-primaryblue rounded-[10px] hover:shadow-xl transition-all duration-150 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{contact.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-primaryblue/60 mb-1">{contact.label}</div>
                  <div className="text-lg font-bold text-primaryblue group-hover:underline">{contact.value}</div>
                </div>
                <div className="text-primaryblue group-hover:translate-x-1 transition-transform">→</div>
              </div>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center p-8 bg-primaryblue rounded-[10px]">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
          <p className="text-white/90 mb-6">
            I'm available for full-time positions and select freelance projects.
          </p>
          <a
            href="mailto:olatoyedan@gmail.com"
            className="inline-block px-8 py-4 bg-white text-primaryblue font-bold rounded-[4px] hover:bg-primaryivory transition-colors duration-150"
          >
            Send Me an Email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-primaryblue text-center">
          <p className="text-sm text-primaryblue/60">
            © {new Date().getFullYear()} Daniel Olatoye (timi10x). Built with care.
          </p>
        </div>
      </div>
    </section>
  )
}
