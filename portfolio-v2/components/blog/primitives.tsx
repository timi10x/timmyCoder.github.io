'use client'

import { ReactNode } from 'react'

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
      {children}
    </p>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
      {children}
    </h2>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3">
      {children}
    </h3>
  )
}

export function Code({ children, language, filename }: { children: string; language: string; filename?: string }) {
  return (
    <div className="mb-8 rounded-2xl overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
        {filename && <span className="text-xs text-gray-500 font-mono">{filename}</span>}
      </div>
      <pre className="bg-gray-900 p-4 sm:p-6 overflow-x-auto">
        <code className="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
          {children.trim()}
        </code>
      </pre>
    </div>
  )
}

export function Img({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mb-8">
      <img src={src} alt={alt} className="w-full rounded-lg" />
      {caption && (
        <figcaption className="text-xs text-gray-400 mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}

export function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`${ordered ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-6 text-base sm:text-lg text-gray-700`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-gray-900 pl-4 py-2 mb-6 text-gray-600 italic text-base sm:text-lg">
      {children}
    </div>
  )
}
