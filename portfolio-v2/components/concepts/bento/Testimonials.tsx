'use client'

import { testimonials } from '@/data/portfolio'

export default function BentoTestimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue">
          Kind Words
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex gap-6 animate-marquee hover:pause-marquee">
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] bg-primaryivory border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-primaryblue/20 font-serif leading-none mb-4">
                "
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-primaryblue/90 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primaryblue text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-primaryblue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primaryblue/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
