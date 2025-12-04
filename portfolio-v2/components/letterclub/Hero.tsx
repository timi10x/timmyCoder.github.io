'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primaryblue mb-8 leading-none">
          timi10x
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-primaryblue/80 mb-12 leading-snug max-w-3xl mx-auto">
          Mobile Engineer building financial products people trust with their money
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-4 bg-primaryblue text-white font-bold rounded-[4px] hover:bg-primaryblue/90 transition-colors duration-150"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-primaryblue font-bold border-2 border-primaryblue rounded-[4px] hover:bg-primaryblue/5 transition-colors duration-150"
          >
            Get In Touch
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="p-4">
            <div className="text-4xl font-black text-primaryblue mb-2">5+</div>
            <div className="text-sm text-primaryblue/60">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-black text-primaryblue mb-2">100K+</div>
            <div className="text-sm text-primaryblue/60">Active Users</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-black text-primaryblue mb-2">10+</div>
            <div className="text-sm text-primaryblue/60">Projects Shipped</div>
          </div>
        </div>
      </div>
    </section>
  )
}
