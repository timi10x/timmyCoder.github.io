'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogPostMeta } from '@/lib/types'

interface BlogPostCardProps {
  post: BlogPostMeta
  index: number
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block border-t border-gray-200 py-6 md:py-8 transition-all duration-300 hover:px-4 md:hover:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors inline-flex items-center gap-2">
              {post.title}
              <motion.span
                className="inline-block opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                initial={false}
              >
                &rarr;
              </motion.span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex md:flex-col items-center md:items-end gap-2 md:gap-1 mt-2 md:mt-1 shrink-0">
            <span className="text-xs text-gray-400">{formattedDate}</span>
            <span className="text-xs text-gray-400">{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
