'use client'

export default function EditorialHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Newspaper Header */}
        <div className="border-b-4 border-primaryblue pb-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-primaryblue/60 uppercase tracking-widest">
              Portfolio • 2025
            </div>
            <div className="text-xs text-primaryblue/60 uppercase tracking-widest">
              Mobile Engineering
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-primaryblue/40 mb-2 tracking-widest">
              ───────── FINTECH SPECIALIST ─────────
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-black text-primaryblue leading-none mb-6" style={{ letterSpacing: '-0.02em' }}>
            timi10x
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-primaryblue/80 leading-snug mb-8 font-medium">
              Building Financial Products That People Trust With Their Money
            </p>

            <div className="flex items-center justify-center gap-3 text-sm text-primaryblue/60 uppercase tracking-wider mb-8">
              <span>Mobile Engineer</span>
              <span>•</span>
              <span>Fintech Builder</span>
              <span>•</span>
              <span>Problem Solver</span>
            </div>
          </div>
        </div>

        {/* Editorial Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-primaryblue pt-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="border-l-4 border-primaryblue pl-4">
              <div className="text-xs text-primaryblue/60 uppercase tracking-wider mb-2">
                Experience
              </div>
              <div className="text-4xl font-black text-primaryblue mb-1">5+</div>
              <p className="text-sm text-primaryblue/80">
                Years building production-ready fintech applications trusted by hundreds of thousands
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="border-l-4 border-primaryblue pl-4">
              <div className="text-xs text-primaryblue/60 uppercase tracking-wider mb-2">
                Impact
              </div>
              <div className="text-4xl font-black text-primaryblue mb-1">100K+</div>
              <p className="text-sm text-primaryblue/80">
                Active users relying on platforms I've engineered across Africa
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div className="border-l-4 border-primaryblue pl-4">
              <div className="text-xs text-primaryblue/60 uppercase tracking-wider mb-2">
                Volume
              </div>
              <div className="text-4xl font-black text-primaryblue mb-1">$50M+</div>
              <p className="text-sm text-primaryblue/80">
                In financial transactions processed securely through mobile infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-primaryblue/20">
          <a
            href="#work"
            className="px-10 py-4 bg-primaryblue text-white font-bold text-sm uppercase tracking-wider hover:bg-primaryblue/90 transition-colors"
          >
            Read Full Portfolio
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-white text-primaryblue font-bold text-sm uppercase tracking-wider border-2 border-primaryblue hover:bg-primaryblue/5 transition-colors"
          >
            Contact for Opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
