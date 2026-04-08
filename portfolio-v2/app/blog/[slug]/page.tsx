import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/content/blog'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return blogPosts.map((entry) => ({
    slug: entry.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = blogPosts.find((p) => p.slug === slug)
  if (!entry) return { title: 'Not Found | timi10x' }
  return {
    title: `${entry.meta.title} | timi10x`,
    description: entry.meta.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const entry = blogPosts.find((p) => p.slug === slug)
  if (!entry) notFound()

  const { meta, Content } = entry

  const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
        Back to Writing
      </Link>

      {/* Post header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {meta.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <time dateTime={meta.date}>{formattedDate}</time>
          <span>&bull;</span>
          <span>{meta.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="h-[1px] bg-gray-200" />
      </header>

      {/* Post content */}
      <div className="mt-8">
        <Content />
      </div>

      {/* Post footer */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          Back to all posts
        </Link>
      </div>
    </article>
  )
}
