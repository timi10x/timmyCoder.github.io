'use client'

const principles = [
  {
    title: 'User trust is everything',
    description: 'Every design decision must consider: "Would I trust this with my money?" Security, clarity, and reliability aren\'t features—they\'re requirements.'
  },
  {
    title: 'Simple beats clever',
    description: 'Financial operations are complex enough. The interface should be so intuitive that users never need to think about how it works.'
  },
  {
    title: 'Offline-first architecture',
    description: 'Money doesn\'t wait for WiFi. Build apps that work everywhere, sync gracefully, and never lose data.'
  },
  {
    title: 'Test like it\'s real money',
    description: 'Because it is. Comprehensive testing, error handling, and graceful failures aren\'t optional.'
  },
  {
    title: 'Performance is UX',
    description: 'A 2-second delay on a payment confirmation feels like an eternity. Fast, responsive apps build confidence.'
  },
  {
    title: 'Build for everyone',
    description: 'Financial literacy varies. Design for users who\'ve never used a fintech app before.'
  }
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-4">Philosophy</h2>
          <p className="text-xl text-primaryblue/70">
            Six principles that guide every decision
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="p-8 bg-white border-2 border-primaryblue rounded-[10px] hover:shadow-xl transition-shadow duration-150"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 bg-primaryblue text-white flex items-center justify-center text-xl font-black rounded-[4px] mb-4">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primaryblue mb-3">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-base text-primaryblue/70 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
