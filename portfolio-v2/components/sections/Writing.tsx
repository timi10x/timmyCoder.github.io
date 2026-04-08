'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/content/blog'

export default function Writing() {
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <section id="writing" className="py-8 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Writing
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Thoughts on mobile engineering, architecture, and building at scale
        </motion.p>

        <div className="space-y-0">
          {previewPosts.map((entry, index) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${entry.slug}`}
                className="group block border-t border-gray-200 py-6 md:py-8 transition-all duration-300 hover:px-4 md:hover:px-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors inline-flex items-center gap-2">
                      {entry.meta.title}
                      <motion.span
                        className="inline-block opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                        initial={false}
                      >
                        &rarr;
                      </motion.span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {entry.meta.description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">{entry.meta.readingTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-gray-200" />
        </div>

        {/* View all link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            View all posts
            <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
