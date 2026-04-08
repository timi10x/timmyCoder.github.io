import { Metadata } from 'next'
import { blogPosts } from '@/content/blog'
import BlogPostCard from '@/components/blog/BlogPostCard'

export const metadata: Metadata = {
  title: 'Writing | timi10x',
  description: 'Thoughts on mobile engineering, architecture, and building at scale.',
}

export default function BlogPage() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Writing
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12">
          Thoughts on mobile engineering, architecture, and building at scale
        </p>

        <div className="space-y-0">
          {blogPosts.map((entry, index) => (
            <BlogPostCard
              key={entry.slug}
              post={entry.meta}
              index={index}
            />
          ))}

          {/* Bottom border */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  )
}
