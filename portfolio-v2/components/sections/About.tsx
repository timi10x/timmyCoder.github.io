'use client'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">
          About Me
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            Hi! ✋ I'm <span className="text-primary font-semibold">Daniel</span>, a mobile engineer with strong interests in
            building <span className="text-secondary font-semibold">magical mobile experiences</span>, scaling systems up,
            and shipping reliable applications.
          </p>

          <p className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            Adept at developing mobile applications to satisfy user experience in an organised and detail-oriented manner.
            I am very much fascinated by new mind blowing technologies and try to quench my curiosity about how things work.
          </p>

          <p className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            In my years of experience as a mobile app developer, I have worked with companies like
            <a href="http://c2c.ng/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline mx-1">Crop2Cash</a>,
            <a href="https://expansetechnology.ng/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Expanse Technology</a>, and
            <a href="https://chaka.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mx-1">Chaka Stocks</a>,
            where I built scalable mobile applications serving thousands of users in their daily financial activities.
          </p>

          <p className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            Currently, I'm exploring and working on more ways to build more reliable mobile applications to make
            the <span className="text-primary font-semibold">FINTECH experience</span> better on your palm.
          </p>
        </div>
      </div>
    </section>
  )
}
