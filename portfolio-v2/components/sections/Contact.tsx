'use client'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/timmyCoder',
    icon: '🔗',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-olatoye/',
    icon: '💼',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/timmyCoder',
    icon: '🐦',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@olatoyedaniel',
    icon: '✍️',
  },
  {
    name: 'Email',
    url: 'mailto:olatoyedan@gmail.com',
    icon: '📧',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">
          Let's Connect
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="backdrop-blur-md bg-white/5 p-12 rounded-2xl border border-white/10 mb-12">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-primary transition-all group"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="font-semibold group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Daniel Olatoye. Built with Next.js, Three.js & Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
