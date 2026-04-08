import BlogHeader from '@/components/blog/BlogHeader'
import Footer from '@/components/sections/Footer'
import Background from '@/components/layout/Background'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <BlogHeader />
      <main className="relative z-10 pt-14">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
