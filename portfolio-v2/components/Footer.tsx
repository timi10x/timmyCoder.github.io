'use client'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-neutral-900">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-8">Get in touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:olatoyedan@gmail.com"
                className="block text-white/80 hover:text-white transition-colors"
              >
                olatoyedan@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-8">Connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://twitter.com/timmyCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                X.com →
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-olatoye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/timmyCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub →
              </a>
              <a
                href="https://medium.com/@olatoyedaniel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Medium →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} timi10x
          </p>
        </div>
      </div>
    </footer>
  )
}
